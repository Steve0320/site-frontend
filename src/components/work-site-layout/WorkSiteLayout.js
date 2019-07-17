import React from 'react';
import PropTypes from 'prop-types'

import styles from './WorkSiteLayout.module.css'

class WorkSiteLayout extends React.Component {

    render() {

        return (
            <div className={styles.workSiteLayout}>
                <div className={styles.rightNav}>
                    <p>Right Nav</p>
                </div>
                <div className={styles.workContent}>
                    <p>Work Site</p>
                </div>
            </div>
        );

    }

}

export default WorkSiteLayout;