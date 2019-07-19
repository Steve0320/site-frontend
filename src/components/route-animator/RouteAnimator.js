/*
 * This component builds on the functionality offered by React Transition
 * Group to allow different transitions when navigating between pages. All
 * one needs to provide is the timeout value, and the getTransition function,
 * which should return the set of CSS classes to use for the current page change.
 */

import React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";

const transitionChildFactory = (props) => (
    child => React.cloneElement(child, props)
);

class RouteAnimator extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            transitionClasses: {},
            transitionTime: 0,
            location: this.props.location
        };

    }

    /*
     * Set transition classes/timeouts based on location props. Replaces
     * componentWillReceiveProps, which is deprecated.
     */
    static getDerivedStateFromProps(props, state) {

        let {pathname: path} = state.location;
        let {pathname: newPath} = props.location;

        if (path !== newPath) {

            let transition = props.getTransition(path, newPath);

            return {
                location: props.location,
                transitionClasses: transition || {},
                transitionTime: (transition) ? props.transitionTimeout : 0
            };
        }

        return null;

    }

    /*
     * Wrap the component's children in a CSS transition, using provided props. Because CSSTransitionGroup
     * does not update the classNames prop when component is exiting, we use the childFactory prop of
     * TransitionGroup to dynamically set the classNames when exiting (for a more thorough explanation, see
     * https://medium.com/lalilo/dynamic-transitions-with-react-router-and-react-transition-group-69ab795815c9)
     */
    render() {

        return (

            <React.Fragment>

                <TransitionGroup component={null} childFactory={transitionChildFactory({classNames: this.state.transitionClasses, timeout: this.state.transitionTime})}>
                    <CSSTransition key={this.props.location.key} timeout={this.props.transitionTimeout}>
                        {this.props.children}
                    </CSSTransition>
                </TransitionGroup>

            </React.Fragment>

        );

    }

}

RouteAnimator.propTypes = {
    transitionTimeout: PropTypes.number,
    getTransition: PropTypes.func
};


export default withRouter(RouteAnimator);