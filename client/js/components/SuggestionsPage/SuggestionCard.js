import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import sam from '../../../images/sam.jpg'
import wingluke from '../../../images/wingluke.jpg'
import emp from '../../../images/emp.jpg'

const images = {
    sam,
    wingluke,
    emp
}

class SuggestionCard extends Component {
    render() {
        const { title, description, imageName, toggleOverlay} = this.props;
        return (
            <div style={STYLES.card} className="card">
                <div className="card-image" onClick={toggleOverlay}>
                    <img style={STYLES.cardImage} key={title + "image"} src={images[imageName]} />
                    <span style={STYLES.cardTitle} key={title + "title"} className="card-title">{title}</span>
                </div>
                <div className="card-content">
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <p>
                        <input type="checkbox"/>
                        <label>I like this suggestion</label>
                    </p>
                    <a onClick={toggleOverlay}>More Info</a>
                </div>
            </div>
        );
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
    }
};

SuggestionCard.propTypes = {};
SuggestionCard.defaultProps = {};

export default Radium(SuggestionCard);
