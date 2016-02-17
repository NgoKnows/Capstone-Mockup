import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import Slider from '../Slider'
class ProfilePageAttributes extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <h2>Your attributes!</h2>
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

ProfilePageAttributes.propTypes = {};
ProfilePageAttributes.defaultProps = {};

export default Radium(ProfilePageAttributes);
