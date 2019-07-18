import React from "react";

import {Route, Switch} from "react-router-dom";

import SplitLayout from "../split-layout/SplitLayout";
import WorkSiteLayout from "../work-site-layout/WorkSiteLayout";
import FunSiteLayout from "../fun-site-layout/FunSiteLayout";
import RouteAnimator from "../route-animator/RouteAnimator"

import styles from './App.module.css';

// Reload page if browser doesn't support history API
//const supportsHistory = 'pushState' in window.history;

class App extends React.Component {

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
    } else {
      return {};
    }

  }

  /*
   * Render the top-level UI, animating between states smoothly.
   */
  render() {

    return (
        <div>

          <RouteAnimator transitionTimeout={1000} getTransition={this.getTransition}>
            <Switch location={this.props.location}>
              <Route exact path='/' render={() => <SplitLayout leftLink='/work' rightLink='/fun'/>} />
              <Route path='/work' component={WorkSiteLayout} />
              <Route path='/fun' component={FunSiteLayout} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </RouteAnimator>

        </div>
    )

  }

}

export default App;
