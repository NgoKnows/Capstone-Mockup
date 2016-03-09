import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import { Link } from 'react-router'

class ProfilePage extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <div style={STYLES.tabs}>
                    <Link to="profile/list">
                        <div style={[STYLES.tab, STYLES.active(this.props.location.pathname.endsWith('list'))]}>Your List</div>
                    </Link>
                    <Link to="profile/attributes">
                        <div style={[STYLES.tab, STYLES.active(this.props.location.pathname.endsWith('attributes'))]}>Attributes</div>
                    </Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

const STYLES = {
    container: {
        //display: 'flex',
        //flexDirection: 'column',
        //justifyContent: 'center',
        //alignItems: 'center',
        height: '100%',
        width: '100%'
    },

    tabs: {
        display: 'flex',
        justifyContent: 'center',
        margin: '12px'
    },

    tab: {
        fontSize: '36px',
        marginRight: '36px',
        //marginLeft: '12px'
    },

    active: (active) => {
        if (active) {
            return {
                borderBottom: '6px solid black'
            };
        } else {
            return {};
        }
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
