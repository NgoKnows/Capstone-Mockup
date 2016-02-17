import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { Link } from 'react-router'

class ProfilePage extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <Link to="profile/list"><div style={STYLES.link}>Your List!</div></Link>
                <Link to="profile/attributes"><div style={STYLES.link}>Your Attributes!</div></Link>
            </div>
        );
    }
}

const STYLES = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },

    link: {
        fontSize: '3rem',
        textDecoration: 'underline',
        marginBottom: '0.5em'
    }
};

ProfilePage.propTypes = {};
ProfilePage.defaultProps = {};

export default Radium(ProfilePage);
