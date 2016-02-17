import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class Slider extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <h5>{this.props.title}</h5>
                <div style={STYLES.sliderContainer}>
                    <div style={STYLES.label}><i className="fa fa-thumbs-down"></i></div>
                    <input style={STYLES.slider} type="range"/>
                    <div style={STYLES.label}><i className="fa fa-thumbs-up"></i></div>
                </div>
            </div>
        );
    }
}
const STYLES = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '27vw',
        marginBottom: '50px',
        marginRight: '2vw'

    },

    sliderContainer: {
        display: 'flex',
        width: '100%'
    },

    slider: {
        margin: '1em',
    },

    label: {
        fontSize: '2em',
        marginTop: '5px'
    }
};
Slider.propTypes = {};
Slider.defaultProps = {};

export default Radium(Slider);
