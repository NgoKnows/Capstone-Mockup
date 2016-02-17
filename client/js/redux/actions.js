import { CHANGE_SIGN_IN_FIELD, CHANGE_SIGN_UP_FIELD,
    RESET_SIGN_IN_FIELDS, RESET_SIGN_UP_FIELDS,
    SET_LOADING_SIGN_IN, SET_LOADING_SIGN_UP,
    SET_ERROR_MESSAGE_SIGN_IN, SET_ERROR_MESSAGE_SIGN_UP,
    SET_AUTHENTICATION_STATUS, SET_USER_DISPLAY_NAME,
    SET_USER_EMAIL, SET_USER_OAUTH,
    SET_USER_PROVIDER, RESET_USER_DATA } from './constants'
import { routeActions } from 'react-router-redux'

// Sign Up Actions
// --------------------------------------------------
export function setUserDisplayName(value) {
    return {
        type: SET_USER_DISPLAY_NAME,
        value
    }
}

export function setUserEmail(value) {
    return {
        type: SET_USER_EMAIL,
        value
    }
}

export function setUserOauth(value) {
    return {
        type: SET_USER_OAUTH,
        value
    }
}

export function setUserProvider(value) {
    return {
        type: SET_USER_PROVIDER,
        value
    }
}

export function resetUserData() {
    return {
        type: RESET_USER_DATA
    }
}

// Sign Up Actions
// --------------------------------------------------
export function changeSignUpField(field, value) {
    return {
        type: CHANGE_SIGN_UP_FIELD,
        field,
        value
    }
}

export function resetSignUpFields() {
    return {
        type: RESET_SIGN_UP_FIELDS
    }
}

export function setLoadingSignUp(loading) {
    return {
        type: SET_LOADING_SIGN_UP,
        loading
    }
}

export function setErrorMessageSignUp(message) {
    return {
        type: SET_ERROR_MESSAGE_SIGN_UP,
        message
    }
}

// Sign In Actions
// --------------------------------------------------
export function changeSignInField(field, value) {
    return {
        type: CHANGE_SIGN_IN_FIELD,
        field,
        value
    }
}

export function resetSignInFields() {
    return {
        type: RESET_SIGN_IN_FIELDS
    }
}

export function setLoadingSignIn(loading) {
    return {
        type: SET_LOADING_SIGN_IN,
        loading
    }
}

export function setErrorMessageSignIn(message) {
    return {
        type: SET_ERROR_MESSAGE_SIGN_IN,
        message
    }
}

// Authentication
// --------------------------------------------------
export function setAuthenticationStatus(status) {
    return {
        type: SET_AUTHENTICATION_STATUS,
        status
    }
}

// Thunks
// --------------------------------------------------

// Router
// --------------------------------------------------
export const { push, replace, go, goForward, goBack } = routeActions;
