import React from "react";
import {Switch, Route} from "react-router-dom";

import SideMenuLayout from "../../side-menu-layout/SideMenuLayout";

import styles from "./FunSite.module.css";

// Avoids hard-coding paths elsewhere in code in case they change later
const links = {
    muse: '/fun/muse',
    borderDnD: '/fun/borderdnd',
    grafana: '/fun/grafana',
    wonderhack: '/fun/wonderhack',
    shaftquack: '/fun/shaftquack'
};

const FunSite = () => {

    const menuItems = [
        {title: 'To Work Information', link: '/work'},
        {title: 'About', link: '/fun'},
        {title: 'Project Muse', link: links.muse},
        {title: 'BorderDnD', link: links.borderDnD},
        {title: 'GrafanaScripts', link: links.grafana},
        {title: 'Winter WonderHack 2017', link: links.wonderhack},
        {title: 'ShaftQuack', link: links.shaftquack}
    ];

    return (
        <SideMenuLayout menuAlign='left' menuItems={menuItems} menuClass={styles.sideMenu} menuItemClass={styles.sideMenuItems}>
            <div className={styles.content}>
                <Switch>
                    <Route path="/fun/muse" render={()=>(<div>Project Muse</div>)} />
                    <Route path="/fun/borderdnd" render={()=>(<div>BorderDnD</div>)} />
                    <Route path="/fun/grafana" render={()=>(<div>Grafana Scripts</div>)} />
                    <Route path="/fun/wonderhack" render={()=>(<div>Winter WonderHack 2017</div>)} />
                    <Route path="/fun/shaftquack" render={()=>(<div>ShaftQuack</div>)} />
                    <Route render={() => (<div>About</div>)} />
                </Switch>
            </div>
        </SideMenuLayout>
    );

};

export default FunSite;