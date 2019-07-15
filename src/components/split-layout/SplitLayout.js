/*
 * A simple two-column link layout
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './SplitLayout.css';

class SplitLayout extends React.Component {

    // Set up initial state and bindings
    constructor(props) {

        super(props);

        this.state = { slidingLeft: false, slidingRight: false };

    }

    render() {

        return (
            <div className='SplitSlider'>

                <Link to={this.props.leftLink} className='SplitSlider-Link' title="TEST">
                    <p>{this.props.leftLink}</p>
                </Link>

                <Link to={this.props.rightLink} className='SplitSlider-Link'>
                    <p>{this.props.rightLink}</p>
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