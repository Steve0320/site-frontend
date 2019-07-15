/*
 * Main script to bootstrap the rest of the app. Sets up
 * the routing context and renders the App component.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, withRouter} from "react-router-dom";

import App from './components/app/App';

import './index.css';

// Define a pseudo component to inject router props into app context
const Site = withRouter((props) => <App {...props} />);

ReactDOM.render(<Router><Site /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
