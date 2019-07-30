/*
 * Presentational component for Project data.
 */

import React from 'react';

import styles from './CodeProjectLayout.module.css';

const CodeProjectLayout = (props) => (
    <div className={styles.container}>

        <div className={styles.header}>
            <span className={styles.headerTitle}>{props.name}:</span> <i>{props.shortDescription}</i>
        </div>

        <div className={styles.description}>
            {props.fullDescription}
        </div>

        <div className={styles.information}>
            TBD
        </div>

    </div>
);

export default CodeProjectLayout;