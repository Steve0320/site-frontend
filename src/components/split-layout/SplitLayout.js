/*
 * A simple two-column link layout
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {Link} from 'react-router-dom';

import styles from './SplitLayout.module.css';

const SplitLayout = (props) => (

    <div className={styles.splitLayout}>

        <Link to={props.leftLink} className={cx(styles.link, styles.leftLink)}>
            <div className={styles.description}>
                <p>For Work</p>
            </div>
        </Link>

        <Link to={props.rightLink} className={cx(styles.link, styles.rightLink)}>
            <div className={styles.description}>

            </div>
        </Link>

    </div>

);

SplitLayout.propTypes = {
    leftLink: PropTypes.string.isRequired,
    rightLink: PropTypes.string.isRequired,
    leftImage: PropTypes.string,
    rightImage: PropTypes.string
};

SplitLayout.defaultProps = {
    leftImage: '',
    rightImage: '',
};

export default SplitLayout;