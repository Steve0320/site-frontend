import React from "react";

import {Route, Switch} from "react-router-dom";

import SplitLayout from "../split-layout/SplitLayout";
import SideMenuLayout from "../side-menu-layout/SideMenuLayout";
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
      return false;
    }

  }

  /*
   * Render the top-level UI, animating between states smoothly.
   */
  render() {

      const workSiteLinks = [
          {title: 'test', link: '/test'},
          {title: 'test2', link: '/test2'}
      ];

      const workSiteRender = () => (
          <SideMenuLayout menuAlign='right' menuItems={workSiteLinks}>
          </SideMenuLayout>
      );

      const funSiteRender = () => (
          <SideMenuLayout menuAlign='left'>
          </SideMenuLayout>
      );

    return (
        <div>

          <RouteAnimator transitionTimeout={1000} getTransition={this.getTransition}>
            <Switch location={this.props.location}>
              <Route exact path='/' render={() => <SplitLayout leftLink='/work' rightLink='/fun'/>} />
              <Route path='/work' render={workSiteRender} />
              <Route path='/fun' render={funSiteRender} />
              <Route path='/test' render={funSiteRender} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </RouteAnimator>

        </div>
    )

  }

}

export default App;
