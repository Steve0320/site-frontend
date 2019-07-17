/*
 * A simple two-column link layout
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {Link} from 'react-router-dom';

import styles from './SplitLayout.module.css';

class SplitLayout extends React.Component {

    // Set up initial state and bindings
    constructor(props) {

        super(props);

        this.state = { slidingLeft: false, slidingRight: false };

    }

    render() {

        return (
            <div className={styles.splitSlider}>

                <Link to={this.props.leftLink} className={cx(styles.splitSliderLink, styles.workSiteLink)}>
                    <div className={styles.sliderDescription}>
                        <p>For Work</p>
                    </div>
                </Link>

                <Link to={this.props.rightLink} className={cx(styles.splitSliderLink, styles.funSiteLink)}>
                    <div className={styles.sliderDescription}>

                    </div>
                </Link>

            </div>
        );

    }

}

SplitLayout.propTypes = {
    leftLink: PropTypes.string.isRequired,
    rightLink: PropTypes.string.isRequired,
    leftImage: PropTypes.string,
    rightImage: PropTypes.string,
    onLinkClick: PropTypes.func
};

SplitLayout.defaultProps = {
    leftImage: '',
    rightImage: '',
};

export default SplitLayout;