import React from 'react';
import PropTypes from 'prop-types'

import styles from './FunSiteLayout.module.css'

class FunSiteLayout extends React.Component {

    render() {

        return (
            <div className={styles.funSiteLayout}>
                <div className={styles.leftNav}>
                    <p>Left nav</p>
                </div>
                <div className={styles.funContent}>
                    <p>Fun Site</p>
                </div>
            </div>
        );

    }

}

export default FunSiteLayout;