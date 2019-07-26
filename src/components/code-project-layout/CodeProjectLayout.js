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

    // This data does not need to dynamically update, so just load it after component mounts
    componentDidMount() {
        Axios.get('http://localhost:3000/api/v1/projects/' + this.props.projectKey)
            .then(response => {
                console.log(response);
                const {data} = response;
                this.setState({
                    name: data.name,
                    shortDescription: data.gh_description,
                    fullDescription: data.description,
                    url: data.gh_url,
                    status: data.status,
                    repoCreatedAt: new Date(data.gh_created_at * 1000),
                    repoLastPushedAt: new Date(data.gh_last_pushed_at * 1000),
                    repoLastUpdatedAt: new Date(data.gh_last_updated_at * 1000),
                    cloneUrl: data.gh_clone_url,
                    homepage: data.gh_homepage,
                    repoSize: data.gh_size,
                    repoLanguages: data.gh_languages,
                    owner: data.github_user
                });
            })
            .catch(error => console.log(error));
    }

    render() {

        return (
            <div>
                {this.state.name}<br/>
                {this.state.shortDescription}<br/>
                {this.state.fullDescription}<br/>
                {this.state.url}<br/>
                {this.state.status}<br/>
                {(this.state.repoCreatedAt) ? this.state.repoCreatedAt.toLocaleString() : null}<br/>
                {(this.state.repoLastPushedAt) ? this.state.repoLastPushedAt.toLocaleString() : null}<br/>
                {(this.state.repoLastUpdatedAt) ? this.state.repoLastUpdatedAt.toLocaleString() : null}<br/>
                {this.state.cloneUrl}<br/>
                {this.state.homepage}<br/>
                {this.state.repoSize}<br/>
                Languages Placeholder<br/>
                {this.state.owner}<br/>
            </div>
        );
    }

}

CodeProjectLayout.defaultProps = {
    projectKey: PropTypes.string.isRequired
};

export default CodeProjectLayout;