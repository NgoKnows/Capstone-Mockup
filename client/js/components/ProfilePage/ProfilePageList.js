import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class ProfilePageList extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <h2>Places</h2>
                <div style={STYLES.link}>EMP</div>
                <div style={STYLES.link}>Pike Place Market</div>
                <div style={STYLES.link}>Paseo</div>
                <div style={STYLES.link}>Un Bien</div>
                <div style={STYLES.link}>Shane's Card Shop</div>
            </div>
        );
    }
}

const STYLES = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },

    link: {
        fontSize: '2rem',
        textDecoration: 'underline',
        marginBottom: '0.5em'
    }
};

ProfilePageList.propTypes = {};
ProfilePageList.defaultProps = {};

export default Radium(ProfilePageList);
