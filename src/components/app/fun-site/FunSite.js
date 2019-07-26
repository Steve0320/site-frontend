import React from "react";
import {Switch, Route} from "react-router-dom";

import SideMenuLayout from "../../side-menu-layout/SideMenuLayout";
import CodeProjectLayout from "../../code-project-layout/CodeProjectLayout";

import styles from "./FunSite.module.css";

// Avoids hard-coding paths elsewhere in code in case they change later
const links = {
    museFrontend: '/fun/muse-frontend',
    museBackend: '/fun/muse-backend',
    borderDnD: '/fun/borderdnd',
    grafana: '/fun/grafana',
    wonderhack: '/fun/wonderhack',
    shaftquack: '/fun/shaftquack'
};

const FunSite = () => {

    const menuItems = [
        {title: 'To Work Information', link: '/work'},
        {title: 'About', link: '/fun'},
        {title: 'Project Muse (Frontend)', link: links.museFrontend},
        {title: 'Project Muse (Backend)', link: links.museBackend},
        {title: 'BorderDnD', link: links.borderDnD},
        {title: 'GrafanaScripts', link: links.grafana},
        {title: 'Winter WonderHack 2017', link: links.wonderhack},
        {title: 'ShaftQuack', link: links.shaftquack}
    ];

    return (
        <SideMenuLayout menuAlign='left' menuItems={menuItems} menuClass={styles.sideMenu} menuItemClass={styles.sideMenuItems}>
            <div className={styles.content}>
                <Switch>
                    <Route path={links.museFrontend} render={()=>(<CodeProjectLayout projectKey="muse-frontend" />)} />
                    <Route path={links.museBackend} render={()=>(<CodeProjectLayout projectKey="muse-backend" />)} />
                    <Route path={links.borderDnD} render={()=>(<div>Coming soon</div>)} />
                    <Route path={links.grafana} render={()=>(<CodeProjectLayout projectKey="grafanascripts" />)} />
                    <Route path={links.wonderhack} render={()=>(<CodeProjectLayout projectKey="wonderhack" />)} />
                    <Route path={links.shaftquack} render={()=>(<CodeProjectLayout projectKey="shaftquack" />)} />
                    <Route render={() => (<div>About</div>)} />
                </Switch>
            </div>
        </SideMenuLayout>
    );

};

export default FunSite;