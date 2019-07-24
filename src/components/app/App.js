import React from "react";

import {Route, Switch} from "react-router-dom";

import RouteAnimator from "../route-animator/RouteAnimator"

import WorkSite from "./work-site/WorkSite";
import FunSite from "./fun-site/FunSite";
import HomePage from "./home-page/HomePage";

import styles from './App.module.css';

// Reload page if browser doesn't support history API
//const supportsHistory = 'pushState' in window.history;

class App extends React.Component {

    // TODO: should have option to match prefix only
  getTransition(curPath, newPath) {

    // Helper to determine state
    function matchState(targetPath, targetNewPath) {
        return (curPath === targetPath && newPath === targetNewPath);
    }

    if (matchState('/', '/work') || matchState('/fun', '/')) {
        return {
            enterActive: styles.pageEnterLeft,
            exitActive: styles.pageLeaveRight
        };
    } else if (matchState('/', '/fun') || matchState('/work', '/')) {
        return {
            enterActive: styles.pageEnterRight,
            exitActive: styles.pageLeaveLeft
        };
    } else if (matchState('/work', '/fun')) {
        return {
            enterActive: styles.pageEnterRight,
            exitActive: styles.pageLeaveLeft
        };
    } else if (matchState('/fun', '/work')) {
        return {
            enterActive: styles.pageEnterLeft,
            exitActive: styles.pageLeaveRight
        };
    } else {
        return false;
    }

  }

  /*
   * Render the top-level UI, animating between states smoothly.
   */
  render() {

    return (
        <React.Fragment>

          <RouteAnimator transitionTimeout={1000} getTransition={this.getTransition}>
            <Switch location={this.props.location}>
              <Route exact path='/' component={HomePage} />
              <Route path='/work' component={WorkSite} />
              <Route path='/fun' component={FunSite} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </RouteAnimator>

        </React.Fragment>
    )

  }

}

export default App;
