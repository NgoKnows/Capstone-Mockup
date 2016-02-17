import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { Link } from 'react-router'

class SignUpForm extends Component {
    render() {
        return (
            <div>
                <div style={STYLES.form}>
                    <h3>Sign Up!</h3>
                    <input style={STYLES.input} placeholder="Username" type="text"/>
                    <input style={STYLES.input} placeholder="Password" type="password"/>
                    <input style={STYLES.input} placeholder="Confirm Password" type="password"/>
                    <Link to="/">
                        <button className="waves-effect waves-light btn">Done!</button>
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

SignUpForm.propTypes = {};
SignUpForm.defaultProps = {};

export default Radium(SignUpForm);
