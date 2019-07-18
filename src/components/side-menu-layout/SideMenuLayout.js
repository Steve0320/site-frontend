/*
 * This component organizes its children into a side-menu and content area format. It expects
 * exactly two or more children - the first being the menu structure, and the second and
 * onward being the content. The menu can be aligned either to the right or left.
 */

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./SideMenuLayout.module.css";

const SideMenuLayout = (props) => {

    const {menuAlign} = props;

    let menuClass = (menuAlign === 'left') ? styles.sideMenuLeft : styles.sideMenuRight;

    // Build up menu, style according to side
    const menu = (
        <div className={cx(styles.sideMenu, menuClass)}>

        </div>
    );


    return (
        <div className={styles.layout}>

            {props.menuAlign === 'left' ? menu : null}

            <div className={styles.content}>
                {props.children ? props.children.slice(1) : null}
            </div>

            {props.menuAlign === 'right' ? menu : null}

        </div>
    )

};

SideMenuLayout.propTypes = {
    menuAlign: PropTypes.oneOf(['right', 'left']).isRequired
};

export default SideMenuLayout;
