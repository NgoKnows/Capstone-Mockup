import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import sam from '../../../images/sam.jpg'
import wingluke from '../../../images/wingluke.jpg'
import emp from '../../../images/emp.jpg'
import dz from '../../../images/dz.jpeg'
import paseo from '../../../images/paseo.jpg'
import japonessa from '../../../images/japonessa.jpg'

const images = {
    sam,
    wingluke,
    emp,
    dz,
    paseo,
    japonessa
}

class SuggestionCard extends Component {
    render() {
        const { title, description, imageName, toggleOverlay, list} = this.props;
        return (
            <div style={[STYLES.card, STYLES.list(list)]} className="card">
                <div className="card-image" onClick={toggleOverlay}>
                    <img style={STYLES.cardImage} key={title + "image"} src={images[imageName]} />
                    <span style={STYLES.cardTitle} key={title + "title"} className="card-title">{title}</span>
                </div>
                <div className="card-content">
                    <p>{description}</p>
                    <span style={STYLES.show} onClick={toggleOverlay}>show more...</span>
                </div>
                <div className="card-action">
                    {this.renderActions()}
                </div>
            </div>
        );
    }

    renderActions() {
        const { title, description, imageName, toggleOverlay, list, signup } = this.props;
        console.log(signup)
        if (list) {
            return (
                <div>
                    <a><i style={STYLES.remove} className="fa fa-times"/>Remove</a>
                </div>
            );
        } else if (signup){
            return (
                <div>
                    <p>
                        <input className="filled-in" id={title} type="checkbox"/>
                        <label htmlFor={title}>I like this suggestion</label>
                    </p>
                    <a onClick={toggleOverlay}>More Info</a>
                </div>
            )
        } else {
            return (
                <div>
                    <a><i style={STYLES.check} className="fa fa-check"/>Add to list!</a>
                    <a><i style={STYLES.remove} className="fa fa-times"/>Remove</a>
                </div>
            )
        }
    }
}


const STYLES = {
    card: {
        width: '28vw',
    },

    cardTitle: {
        textDecoration: 'underline',
        ':hover': {
            cursor: 'pointer'
        }
    },

    cardImage: {
        ':hover': {
            cursor: 'pointer'
        }
    },

    remove: {
        marginRight: '5px',
        color: 'red'
    },

    list: (list) => {
        if (list) {
            return {
                marginBottom: '36px'
            }
        } else {
            return {};
        }

    },

    check: {
        marginRight: '5px',
        color: 'green'
    },

    remove: {
        marginRight: '5px',
        color: 'red'
    },

    show: {
        color: 'orange',
        cursor: 'pointer'
    }
};

SuggestionCard.propTypes = {};
SuggestionCard.defaultProps = {};

export default Radium(SuggestionCard);
