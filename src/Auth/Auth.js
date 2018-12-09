import React from 'react'

import LoginForm from './LoginForm'

import { connect } from 'react-redux'
import {
  logInByGoogleAsyncAction,
  logInAsyncAction,
  emailChangeAction,
  passwordChangeAction,
  resetPasswordAsyncAction,
  registrationEmailChangeAction,
  registrationPasswordChangeAction,
  confirmedRegistrationPasswordChange,
  signUpAsyncAction,
} from '../state/auth'
import RegistrationForm from './RegistrationForm';

const Auth = (props) => (
  props._isUserLoggedIn ?
    <div>
      {props.children}
    </div>
    :
    <div>
      <LoginForm
        email={props._email}
        onEmailChangeHandler={props._emailChangeAction}
        password={props._password}
        onPasswordChangeHandler={props._passwordChangeAction}
        onLogInClick={props._logInAsyncAction}
        onLogInByGoogleClick={props._logInByGoogleAsyncAction}
        onPasswordReset={props._passwordResetAsyncAction}
      />
      <RegistrationForm

        registrationEmail={props._registrationEmail}
        registrationEmailChangeHandler={props._registrationEmailChangeAction}

        registrationPassword={props._registrationPassword}
        registrationPasswordChangeHandler={props._registrationPasswordChangeAction}

        confirmedRegistrationPassword={props._confirmedRegistrationPassword}
        confirmedRegistrationPasswordChangeHandler={props._confirmedRegistrationPasswordChange}

        onSignUpClick={props._signUpAsyncAction}
      />
    </div>
)

const mapStateToProps = state => ({
  _isUserLoggedIn: state.auth.isUserLoggedIn,
  _email: state.auth.email,
  _password: state.auth.password,
  _registrationEmail: state.auth.registrationEmail,
  _registrationPassword: state.auth.registrationPassword,
  _confirmedRegistrationPassword: state.auth.confirmedRegistrationPassword,
})

const mapDispatchToProps = dispatch => ({
  _logInByGoogleAsyncAction: () => dispatch(logInByGoogleAsyncAction()),
  _logInAsyncAction: () => dispatch(logInAsyncAction()),
  _emailChangeAction: (event) => dispatch(emailChangeAction(event.target.value)),

  _passwordChangeAction: (event) => dispatch(passwordChangeAction(event.target.value)),
  _passwordResetAsyncAction: () => dispatch(resetPasswordAsyncAction()),
  _registrationEmailChangeAction: (event) => dispatch(registrationEmailChangeAction(event.target.value)),
  _registrationPasswordChangeAction: (event) => dispatch(registrationPasswordChangeAction(event.target.value)),
  _confirmedRegistrationPasswordChange: (event) => dispatch(confirmedRegistrationPasswordChange(event.target.value)),

  _signUpAsyncAction: () => dispatch(signUpAsyncAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)