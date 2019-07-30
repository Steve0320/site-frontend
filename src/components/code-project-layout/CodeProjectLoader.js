/*
 * Data-loading container for CodeProjectLayout presentational component. This
 * component loads project data from the Rails backend API.
 */

import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import CodeProjectLayout from "./CodeProjectLayout";

class CodeProjectLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apiResponseData: {},
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

    // For now, just load the data once on mount
    componentDidMount() {
        Axios.get('http://localhost:3000/api/v1/projects/' + this.props.projectKey)
            .then(response => {
                console.log(response);
                const data = CodeProjectLoader.parseResponse(response);
                this.setState({apiResponseData: data, loading: false});
            })
            .catch(error => console.log(error));
    }

    render() {

        // Placeholder for loading data
        if (this.state.loading) {
            return (<React.Fragment>Loading placeholder...</React.Fragment>);
        }

        // Wrap loaded data in presentation component
        return (
            <CodeProjectLayout {...this.state.apiResponseData} />
        );

    }

}

CodeProjectLoader.defaultProps = {
    projectKey: PropTypes.string.isRequired
};

export default CodeProjectLoader;