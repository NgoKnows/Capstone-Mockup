import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { Link } from 'react-router'

import logo from '../../images/logo.png'

class Header extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <Link to="/home">
                    <div key="home" style={STYLES.icon.container}>
                        <i className="fa fa-home"/>
                        <div style={STYLES.icon.caption}>Home</div>
                    </div>
                </Link>

                <Link to="/">
                    <img style={STYLES.image} src={logo} />
                </Link>
                <Link to="profile/list">
                    <div key="profile" style={STYLES.icon.container}>
                        <i className="fa fa-user"/>
                        <div style={STYLES.icon.caption}>Profile</div>
                    </div>
                </Link>
            </div>
        );
    }
}

const STYLES = {
    container: {
        lineHeight: '1',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        color: 'white',
        fontSize: '2.5em',
        backgroundColor: '#BC4432',
        padding: '0.15em 1em 0 1em',
        boxSizing: 'border-box'
    },

    image: {
        height: '1.5em'
    },

    icon: {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            ':hover': {
                opacity: '0.75'
            }
        },

        caption: {
            fontSize: '1rem',
            //textDecoration: 'underline'
        }
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Radium(Header);
