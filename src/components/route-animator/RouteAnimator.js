/*
 * This component builds on the functionality offered by React Transition
 * Group to allow different transitions when navigating between pages. All
 * one needs to provide is the timeout value, and the getTransition function,
 * which should return the set of CSS classes to use for the current page change.
 */

import React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class RouteAnimator extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            transitionClasses: {}
        };

    }

    /*
     * componentWillUpdate will be deprecated in React 17, so hook into componentDidUpdate
     * instead, in accordance with best practices.
     */
    componentDidUpdate(prevProps, prevState, snapshot) {

        let {pathname: path} = prevProps.location;
        let {pathname: newPath} = this.props.location;

        if (path !== newPath) {
            this.setState({transitionClasses: this.props.getTransition(path, newPath)})
        }

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

                <TransitionGroup childFactory={child => React.cloneElement(child, {classNames: this.state.transitionClasses})}>
                    <CSSTransition key={this.props.location.key} classNames={this.state.transitionClasses} timeout={this.props.transitionTimeout}>
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