import { CHANGE_SIGN_IN_FIELD, CHANGE_SIGN_UP_FIELD,
    RESET_SIGN_IN_FIELDS, RESET_SIGN_UP_FIELDS,
    SET_LOADING_SIGN_IN, SET_LOADING_SIGN_UP,
    SET_ERROR_MESSAGE_SIGN_IN, SET_ERROR_MESSAGE_SIGN_UP,
    SET_AUTHENTICATION_STATUS, SET_USER_DISPLAY_NAME,
    SET_USER_EMAIL, SET_USER_OAUTH,
    SET_USER_PROVIDER, RESET_USER_DATA } from './constants'
import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux-immutablejs'

import Immutable from 'immutable'

function authenticationStatus(state = false, action) {
    switch(action.type) {
        case SET_AUTHENTICATION_STATUS:
            return action.status

        default:
            return state;
    }
}

let initialUserState = Immutable.Map({
    email: '',
    displayName: '',
    oauth: '',
    provider: ''
});
function user(state = initialUserState, action) {
    switch(action.type) {
        case SET_USER_DISPLAY_NAME:
            return state.set('displayName', action.value);

        case SET_USER_EMAIL:
            return state.set('email', action.value);

        case SET_USER_OAUTH:
            return state.set('oauth', action.value);

        case SET_USER_PROVIDER:
            return state.set('provider', action.value);

        case RESET_USER_DATA:
            return initialUserState;

        default:
            return state;
    }
}

//beginning state of app
let initialSignUpState = Immutable.Map({
    email: '',
    password: '',
    displayName: '',
    confirmPassword: '',
    loading: false,
    errorMessage: ''
});

function signUp(state = initialSignUpState, action) {
    switch(action.type) {
        case CHANGE_SIGN_UP_FIELD:
            return state.set(action.field, action.value);

        case RESET_SIGN_UP_FIELDS:
            return initialSignUpState;

        case SET_LOADING_SIGN_UP:
            return state.set('loading', action.loading);

        case SET_ERROR_MESSAGE_SIGN_UP:
            return state.set('errorMessage', action.message)

        default:
            return state;
    }
}

let initialSignInState = Immutable.Map({
    email: '',
    password: '',
    loading: false,
    errorMessage: ''
});
function signIn(state = initialSignInState, action) {
    switch(action.type) {
        case CHANGE_SIGN_IN_FIELD:
            return state.set(action.field, action.value);

        case RESET_SIGN_IN_FIELDS:
            return initialSignInState;

        case SET_LOADING_SIGN_IN:
            return state.set('loading', action.loading);

        case SET_ERROR_MESSAGE_SIGN_IN:
            return state.set('errorMessage', action.message)

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    signIn,
    signUp,
    authenticationStatus,
    user,
    routing: routeReducer,
});

export default rootReducer;
