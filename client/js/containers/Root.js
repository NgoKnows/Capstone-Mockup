import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import DevTools from 'containers/DevTools'
import * as actions from 'flux/actions'

import App from 'containers/App'
import FirstPage from 'components/FirstPage/FirstPage'
import HomePage from 'components/HomePage/HomePage'
import SignInForm from 'components/SignIn/SignIn'
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
                            <IndexRoute component={FirstPage} />
                            <Route path='home' component={HomePage} />
                            <Route path='profile' component={ProfilePage}>
                                <Route path='list' component={ProfilePageList} />
                                <Route path='attributes' component={ProfilePageAttributes} />
                            </Route>
                            <Route path="signin" component={SignInForm} />
                            <Route path='suggestions' component={SuggestionsPage} />
                            <Route path='signup'>
                                <Route path='select' component={SignUpSelect}/>
                                <Route path='learn' component={SignUpLearn}/>
                                <Route path='form' component={SignUpForm}/>
                            </Route>
                        </Route>
                    </Router>
                </div>
            </Provider>
        )
    }
}