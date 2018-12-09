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
  this.props._isUserLoggedIn ?
    <div>
      {this.props.children}
    </div>
    :
    <div>
      <LoginForm
        email={this.props._email}
        onEmailChangeHandler={this.props._emailChangeAction}
        password={this.props._password}
        onPasswordChangeHandler={this.props._passwordChangeAction}
        onLogInClick={this.props._logInAsyncAction}
        onLogInByGoogleClick={this.props._logInByGoogleAsyncAction}
        onPasswordReset={this.props._passwordResetAsyncAction}
      />
      <RegistrationForm

        registrationEmail={this.props._registrationEmail}
        registrationEmailChangeHandler={this.props._registrationEmailChangeAction}

        registrationPassword={this.props._registrationPassword}
        registrationPasswordChangeHandler={this.props._registrationPasswordChangeAction}

        confirmedRegistrationPassword={this.props._confirmedRegistrationPassword}
        confirmedRegistrationPasswordChangeHandler={this.props._confirmedRegistrationPasswordChange}

        onSignUpClick={this.props._signUpAsyncAction}
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