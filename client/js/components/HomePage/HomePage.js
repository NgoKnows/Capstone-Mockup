import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { Link } from 'react-router'

class HomePage extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <div style={STYLES.item}>
                    <div className="input-field">
                        <input type="text" placeholder="What do you want to do?" style={STYLES.input}/>
                        <Link to="suggestions"><button className="waves-effect waves-light btn">Get suggestions!</button></Link>
                    </div>
                </div>
                <Link to="suggestions">
                    <div style={STYLES.item}>
                        <button className="waves-effect waves-light btn">Random Suggestion!</button>
                    </div>
                </Link>
            </div>
        );
    }
}

const STYLES = {
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    item: {
        marginBottom: '0.75em'
    },

    input: {
        textAlign: 'center',
        fontSize: '3rem',
        width: '50vw',
        marginRight: '0.5em',
        marginBottom: '0.5em',
        height: 'inherit'
    },

    notUser: {
        textDecoration: 'underline'
    }
};

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default Radium(HomePage);
