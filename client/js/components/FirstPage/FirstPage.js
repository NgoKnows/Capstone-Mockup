import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { Link } from 'react-router'

class FirstPage extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <Link to="/signup/select">
                    <button style={STYLES.button} className="waves-effect waves-light btn">Sign Up!</button>
                </Link>
                <Link to="/signin">
                    <button style={STYLES.button} className="waves-effect waves-light btn">Sign In!</button>
                </Link>
            </div>
        );
    }
}

const STYLES = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },

    button: {
        fontSize: '42px',
        marginRight: '52px',
        height: '92px'
    }
};

export default Radium(FirstPage);
