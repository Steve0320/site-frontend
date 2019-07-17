import React from "react";

import {Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import SplitLayout from "../split-layout/SplitLayout";
import WorkSiteLayout from "../work-site-layout/WorkSiteLayout";
import FunSiteLayout from "../fun-site-layout/FunSiteLayout";

import styles from './App.module.css';

// Reload page if browser doesn't support history API
//const supportsHistory = 'pushState' in window.history;

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      animation: {}
    };

  }

  // componentWillUpdate will be deprecated in React 17, so hook into
  // componentDidUpdate instead, in accordance with best practices
  componentDidUpdate(prevProps, prevState, snapshot) {

    let {pathname: path} = prevProps.location;
    let {pathname: newPath} = this.props.location;

    // Helper to determine state
    function matchState(targetPath, targetNewPath) {
      return (path === targetPath && newPath === targetNewPath);
    }

    // State machine to figure out transitions
    if (path !== newPath) {

      if (matchState('/', '/work') || matchState('/fun', '/')) {
        this.setState({animation: {
            enterActive: styles.pageEnterLeft,
            exitActive: styles.pageLeaveRight
          }});
      }

      else if (matchState('/', '/fun') || matchState('/work', '/')) {
        this.setState({animation: {
            enterActive: styles.pageEnterRight,
            exitActive: styles.pageLeaveLeft
          }});
      }

      else {
        this.setState({animation: {}});
      }

    }

  }

  /*
   * Render the top-level UI, animating between states smoothly. Because CSSTransitionGroup
   * does not update the classNames prop when component is exiting, we use the childFactory prop of
   * TransitionGroup to dynamically set the classNames when exiting (for a more thorough explanation, see
   * https://medium.com/lalilo/dynamic-transitions-with-react-router-and-react-transition-group-69ab795815c9)
   */
  render() {

    return (
        <div>

          <TransitionGroup childFactory={child => React.cloneElement(child, {classNames: this.state.animation})}>
            <CSSTransition key={this.props.location.key} classNames={this.state.animation} timeout={1000}>

              <Switch location={this.props.location}>
                <Route exact path='/' render={() => <SplitLayout leftLink='/work' rightLink='/fun'/>} />
                <Route path='/work' component={WorkSiteLayout} />
                <Route path='/fun' component={FunSiteLayout} />
                <Route render={() => <div>Not Found</div>} />
              </Switch>

            </CSSTransition>
          </TransitionGroup>

        </div>
    );

  }

}

export default App;
