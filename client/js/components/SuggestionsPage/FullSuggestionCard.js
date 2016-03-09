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
        const { title, description, imageName} = this.props;
        return (
            <div style={STYLES.card} className="card" onClick={(e) => e.stopPropagation()}>
                <div className="card-image">
                    <img style={STYLES.cardImage} key={title + "image"} src={images[imageName]} />
                    <span style={STYLES.cardTitle} key={title + "title"} className="card-title">{title}</span>
                </div>
                <div style={STYLES.content} className="card-content">
                    <div style={STYLES.description}>{description}</div>
                    <div style={STYLES.category}><span style={STYLES.cat}>Address:</span>{' 719 S King St, Seattle, WA 98104'}</div>
                    <div style={STYLES.category}><span style={STYLES.cat}>Phone Number:</span>{' (206) 623-5124'}</div>
                    <div style={STYLES.category}><span style={STYLES.cat}>Hours Today:</span>{' 10AM–5PM'}</div>

                </div>
            </div>
        );
    }
}


const STYLES = {
    card: {
        height: '96vh',
        margin: '2vh 30vw',
    },

    cardTitle: {
        textDecoration: 'underline',
        ':hover': {
            cursor: 'pointer'
        }
    },

    cardImage: {
        maxHeight: '55vh'
    },

    cat: {
        fontWeight: 'bold'
    },

    content: {
    },

    category: {
        marginBottom: '0.25em'
    },

    description: {
        marginBottom: '0.5em'
    }
};

SuggestionCard.propTypes = {};
SuggestionCard.defaultProps = {};

export default Radium(SuggestionCard);
