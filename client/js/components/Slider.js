import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class Slider extends Component {
    render() {
        const { price } = this.props;

        return (
            <div style={STYLES.container}>
                <h5>{this.props.title}</h5>
                    {this.renderSlider()}
            </div>
        );
    }

    renderSlider() {
        if (this.props.price) {
            return (
                <div style={STYLES.sliderContainer}>
                    <div style={[STYLES.label, STYLES.price]}>On a budget</div>
                    <input style={STYLES.slider} type="range"/>
                    <div style={[STYLES.label, STYLES.price]}>Okay with anything</div>
                </div>
            )
        } else {
            return (
                <div style={STYLES.sliderContainer}>
                    <div style={STYLES.label}><i className="fa fa-thumbs-down"></i></div>
                    <input style={STYLES.slider} type="range"/>
                    <div style={STYLES.label}><i className="fa fa-thumbs-down"></i></div>
                </div>
            )
        }
    }
}
const STYLES = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '24vw',
        marginBottom: '50px',
        marginRight: '5vw'

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
    },

    price: {
        fontSize: '19px'
    }
};
Slider.propTypes = {};
Slider.defaultProps = {};

export default Radium(Slider);
