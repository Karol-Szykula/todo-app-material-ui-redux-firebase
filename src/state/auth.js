import { auth, database, googleProvider } from '../firebase'
import { loadTasksFromDbAsyncAction } from './tasks'

import validateEmail from '../utils/emailValidation'

const LOG_IN = 'auth/LOG_IN'
const LOG_OUT = 'auth/LOG_OUT'
const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'

const REGISTRATION_EMAIL_CHANGE = 'auth/REGISTRATION_EMAIL_CHANGE'
const REGISTRATION_PASSWORD_CHANGE = 'auth/REGISTRATION_PASSWORD_CHANGE'
const CONFIRMED_REGISTRATION_PASSWORD_CHANGE = 'auth/CONFIRMED_REGISTRATION_PASSWORD_CHANGE'

export const initAuthChangeListeningAsyncAction = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
            if (user) {
                dispatch(logInAction(user))
                dispatch(saveLogInTimestampAsyncAction())
                dispatch(loadTasksFromDbAsyncAction())
            } else {
                dispatch(logOutAction())
            }
        }
    )
}

export const signUpAsyncAction = () => (dispatch, getState) => {
    const email = getState().auth.registrationEmail
    const regPass = getState().auth.registrationPassword
    const conRegPass = getState().auth.confirmedRegistrationPassword

    if (validateEmail(email) && regPass !== '' && (regPass === conRegPass)) {
        auth.createUserWithEmailAndPassword(email, regPass)
    } else if (!(validateEmail(email))) {
        alert(`That is not a valid email adress`)
    } else if (regPass !== conRegPass) {
        alert(`Passwords doesn't match`)
    } else {
        alert(`Something went wrong`)
    }

}

export const logOutAsyncAction = () => (dispatch, getState) => {
    auth.signOut()
}

export const logInByGoogleAsyncAction = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
}

export const logInAsyncAction = () => (dispatch, getState) => {
    const { auth: { email, password } } = getState()

    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            alert('Wrong user name or password, try again.')
        })
}

export const resetPasswordAsyncAction = () => (dispatch, getState) => {
    auth.sendPasswordResetEmail(getState().auth.email)
        .then(() => alert('Password reset link has been sent on the email'))
        .catch(error => alert('Wrong user name or password, try again.'))
}

const saveLogInTimestampAsyncAction = () => (dispatch, getState) => {
    database.ref('usersLogins/loginsLogs').push({
        timestamp: Date.now()
    })
}

const logInAction = user => ({
    type: LOG_IN,
    user
})
const logOutAction = () => ({ type: LOG_OUT })

export const emailChangeAction = newValue => ({
    type: EMAIL_CHANGE,
    newValue
})

export const passwordChangeAction = newValue => ({
    type: PASSWORD_CHANGE,
    newValue
})

export const registrationEmailChangeAction = newValue => ({
    type: REGISTRATION_EMAIL_CHANGE,
    newValue
})

export const registrationPasswordChangeAction = newValue => ({
    type: REGISTRATION_PASSWORD_CHANGE,
    newValue
})

export const confirmedRegistrationPasswordChange = newValue => ({
    type: CONFIRMED_REGISTRATION_PASSWORD_CHANGE,
    newValue
})

const INITIAL_STATE = {
    isUserLoggedIn: false,
    email: '',
    password: '',
    user: null,
    registrationEmail: '',
    registrationPassword: '',
    confirmedRegistrationPassword: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.user
            }
        case LOG_OUT:
            return {
                ...state,
                isUserLoggedIn: false,
                user: null
            }
        case EMAIL_CHANGE:
            return {
                ...state,
                email: action.newValue
            }
        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.newValue
            }

        case REGISTRATION_EMAIL_CHANGE:
            return {
                ...state,
                registrationEmail: action.newValue
            }

        case REGISTRATION_PASSWORD_CHANGE:
            return {
                ...state,
                registrationPassword: action.newValue
            }

        case CONFIRMED_REGISTRATION_PASSWORD_CHANGE:
            return {
                ...state,
                confirmedRegistrationPassword: action.newValue
            }

        default:
            return state
    }
}