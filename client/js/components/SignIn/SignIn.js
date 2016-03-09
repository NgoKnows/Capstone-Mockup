import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { Link } from 'react-router'

class SignInForm extends Component {
    render() {
        return (
            <div>
                <div style={STYLES.form}>
                    <h3>Sign In!</h3>
                    <input style={STYLES.input} placeholder="Username" type="text"/>
                    <input style={STYLES.input} placeholder="Password" type="password"/>
                    <Link to="/home">
                        <button className="waves-effect waves-light btn">Login!</button>
                    </Link>
                </div>
            </div>
        );
    }
}

const STYLES = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    input: {
        width: '50%',
        marginTop: '2em',
        marginBottom: '1em'
    }
};

export default Radium(SignInForm);
