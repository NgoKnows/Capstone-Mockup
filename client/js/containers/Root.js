import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import DevTools from 'containers/DevTools'
import * as actions from 'flux/actions'

import App from 'containers/App'
import HomePage from 'components/HomePage/HomePage'
import ProfilePage from 'components/ProfilePage/ProfilePage'
import ProfilePageList from 'components/ProfilePage/ProfilePageList'
import ProfilePageAttributes from 'components/ProfilePage/ProfilePageAttributes'
import SuggestionsPage from 'components/SuggestionsPage/SuggestionsPage'
import SignUpSelect from 'components/SignUpPage/SignUpSelect'
import SignUpLearn from 'components/SignUpPage/SignUpLearn'
import SignUpForm from 'components/SignUpPage/SignUpForm'

export default class Root extends Component {
    render() {
        const store = this.props.store;

        return (
            <Provider store={store} >
                <div>
                    <Router history={browserHistory}>
                        <Route path='/' component={App}>
                            <IndexRoute component={HomePage} />
                            <Route path='profile'>
                                <IndexRoute component={ProfilePage}/>
                                <Route path='list' component={ProfilePageList} />
                                <Route path='attributes' component={ProfilePageAttributes} />
                            </Route>
                            <Route path='suggestions' component={SuggestionsPage} />
                            <Route path='signup'>
                                <Route path='select' component={SignUpSelect}/>
                                <Route path='learn' component={SignUpLearn}/>
                                <Route path='form' component={SignUpForm}/>
                            </Route>
                        </Route>
                    </Router>
                    <DevTools/>
                </div>
            </Provider>
        )
    }
}