import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import Slider from '../Slider'

import { Link } from 'react-router'

class SignUpSelect extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <h3>Tell us how much you like these categories</h3>
                <div style={STYLES.sliderContainer}>
                    <Slider title="Price"/>
                    <Slider title="Culture (History, Art)"/>
                    <Slider title="Food"/>
                    <Slider title="Outdoors"/>
                    <Slider title="Entertainment"/>
                    <Slider title="Relaxation"/>
                    <Slider title="Shopping"/>
                    <Slider title="Sports"/>
                </div>
                <Link to="/signup/learn">
                    <button className="waves-effect waves-light btn">Done!</button>
                </Link>
            </div>
        );
    }
}

const STYLES = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    sliderContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        width: '88vw'
    },

    link: {
        fontSize: '2rem',
        textDecoration: 'underline',
        marginBottom: '0.5em'
    }
};

SignUpSelect.propTypes = {};
SignUpSelect.defaultProps = {};

export default Radium(SignUpSelect);
