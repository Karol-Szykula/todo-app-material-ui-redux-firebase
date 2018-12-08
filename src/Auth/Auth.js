import React from 'react'

import LoginForm from './LoginForm'

import { connect } from 'react-redux'
import {
  initAuthChangeListeningAsyncAction,
  logInByGoogleAsyncAction,
  logInAsyncAction,
  emailChangeAction,
  passwordChangeAction,
  resetPasswordAsyncAction
} from '../state/auth'
import RegistrationForm from './RegistrationForm';

class Auth extends React.Component {
  componentDidMount() {
    this.props._initAuthChangeListeningAsyncAction()
  }

  render() {
    return (
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

          />
        </div>
    )
  }
}

const mapStateToProps = state => ({
  _isUserLoggedIn: state.auth.isUserLoggedIn,
  _email: state.auth.email,
  _password: state.auth.password
})

const mapDispatchToProps = dispatch => ({
  _initAuthChangeListeningAsyncAction: () => dispatch(initAuthChangeListeningAsyncAction()),
  _logInByGoogleAsyncAction: () => dispatch(logInByGoogleAsyncAction()),
  _logInAsyncAction: () => dispatch(logInAsyncAction()),
  _emailChangeAction: (event) => dispatch(emailChangeAction(event.target.value)),
  _passwordChangeAction: (event) => dispatch(passwordChangeAction(event.target.value)),
  _passwordResetAsyncAction: () => dispatch(resetPasswordAsyncAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)