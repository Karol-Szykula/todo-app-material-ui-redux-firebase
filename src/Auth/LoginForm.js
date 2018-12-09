import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const LoginForms = (props) => (
  <Paper
    style={{
      margin: 20,
      padding: 20
    }}
  >
    <h2>Sign in!</h2>
    <h4>(testing credentials: example@example.com, example)</h4>
    <TextField
      name="email"
      type="email"
      floatingLabelText="E-mail"
      value={props.email}
      onChange={props.onEmailChangeHandler}
      fullWidth={true}
    />
    <TextField
      name="password"
      type="password"
      floatingLabelText="Password"
      value={props.password}
      onChange={props.onPasswordChangeHandler}
      fullWidth={true}
    />
    <RaisedButton
      style={{ margin: '5px 0' }}
      label={'Sign in'}
      primary={true}
      onClick={props.onLogInClick}
      fullWidth={true}
    />
    <RaisedButton
      style={{ margin: '5px 0' }}
      label={'Sign in by Google'}
      secondary={true}
      onClick={props.onLogInByGoogleClick}
      fullWidth={true}
    />
    <RaisedButton
      style={{ margin: '5px 0' }}
      label={'Reset password'}

      onClick={props.onPasswordReset}
      fullWidth={true}
    />
  </Paper>
)

export default LoginForms