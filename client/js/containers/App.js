import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from 'flux/actions'
import Header from 'components/Header'

class App extends Component {
    render() {
        const { actions, ...other } = this.props;

        return (
            <div style={STYLES.container}>
                <Header />
                <div style={STYLES.child}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {}

function mapStateToProps(state) {
    return {
        blah : state.get('blah')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(actions, dispatch)
    };
}

const STYLES = {
    container: {
        fontFamily: 'Montserrat, Serif',
        height: '80vh'
    },

    child: {
        //margin: '0 5em',
        width: '100%',
        height: '100%'
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
