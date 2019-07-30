/*
 * Display logic for the "projects" section of the API endpoint. Since this is a simple
 * data display, we don't bother using higher order components, and instead put the data
 * fetching mechanisms in this component as well.
 */

import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import styles from './CodeProjectLayout.module.css';

class CodeProjectLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            shortDescription: '',
            fullDescription: '',
            url: '',
            status: '',
            repoCreatedAt: null,
            repoLastPushedAt: null,
            repoLastUpdatedAt: null,
            cloneUrl: '',
            homepage: '',
            repoSize: '',
            repoLanguages: {},
            owner: '',
            loading: true
        };
    }

    // Helper method to parse API response data
    static parseResponse(response) {

        const {data} = response;

        const createdAt = (data.gh_created_at) ? new Date(data.gh_created_at * 1000) : null;
        const updatedAt = (data.gh_last_updated_at) ? new Date(data.gh_last_updated_at * 1000) : null;
        const pushedAt = (data.gh_last_pushed_at) ? new Date(data.gh_last_pushed_at * 1000) : null;

        return {
            name: data.name,
            shortDescription: data.gh_description,
            fullDescription: data.description,
            url: data.gh_url,
            status: data.status,
            repoCreatedAt: createdAt,
            repoLastPushedAt: pushedAt,
            repoLastUpdatedAt: updatedAt,
            cloneUrl: data.gh_clone_url,
            homepage: data.gh_homepage,
            repoSize: data.gh_size,
            repoLanguages: data.gh_languages,
            owner: data.github_user
        };

    }

    // This data does not need to dynamically update, so just load it after component mounts
    componentDidMount() {
        Axios.get('http://localhost:3000/api/v1/projects/' + this.props.projectKey)
            .then(response => {
                console.log(response);
                const data = CodeProjectLayout.parseResponse(response);
                data.loading = false;
                this.setState(data);
            })
            .catch(error => console.log(error));
    }

    render() {

        // Only format results if available yet
        if (this.state.loading) {
            return (
                <React.Fragment>
                    Loading placeholder...
                </React.Fragment>
            );
        }

        // Display data
        return (
            <div className={styles.container}>

                <div className={styles.header}>
                    <span className={styles.headerTitle}>{this.state.name}:</span> <i>{this.state.shortDescription}</i>
                </div>

                <div className={styles.description}>
                    {this.state.fullDescription}
                </div>

                <div className={styles.information}>
                    TBD
                </div>

            </div>
        );
    }

}

CodeProjectLayout.defaultProps = {
    projectKey: PropTypes.string.isRequired
};

export default CodeProjectLayout;