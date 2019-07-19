/*
 * This component organizes its children into a side-menu and content area format. It expects
 * exactly two or more children - the first being the menu structure, and the second and
 * onward being the content. The menu can be aligned either to the right or left.
 */

import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import cx from "classnames";

import styles from "./SideMenuLayout.module.css";

const SideMenuLayout = (props) => {

    const {menuAlign} = props;
    const menuIsRight = (menuAlign === 'right');

    // Build up menu, style according to side
    const menu = (
        <div className={cx(styles.sideMenu, (menuIsRight) ? styles.sideMenuRight : styles.sideMenuLeft)}>

            {props.menuItems.map((item) => (
                <Link to={item.link} key={item.title}>
                    <p>{item.title}</p>
                </Link>
            ))}

        </div>
    );


    return (
        <div className={styles.layout}>

            {(!menuIsRight) ? menu : null}

            <div className={styles.content}>
                {props.children}
            </div>

            {(menuIsRight) ? menu : null}

        </div>
    )

};

SideMenuLayout.propTypes = {
    menuAlign: PropTypes.oneOf(['right', 'left']).isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.object)
};

SideMenuLayout.defaultProps = {
    menuItems: []
};

export default SideMenuLayout;
