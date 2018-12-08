import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const RegistrationForm = (props) => (
    <Paper
        style={{
            margin: 20,
            padding: 20
        }}
    >
        <h2>Sign In!</h2>
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
        <TextField
            name="confirmPassword"
            type="password"
            floatingLabelText="Confirm password"
            // value={props.password}
            // onChange={props.onPasswordChangeHandler}
            fullWidth={true}
        />
        <RaisedButton
            style={{ margin: '5px 0' }}
            label={'Sign Up!'}
            primary={true}
            onClick={props.onLogInClick}
            fullWidth={true}
        />
    </Paper>
)

export default RegistrationForm