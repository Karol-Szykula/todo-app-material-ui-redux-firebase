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
        <h2>Sign Up!</h2>
        <TextField
            name="email"
            type="email"
            floatingLabelText="E-mail"
            value={props.registrationEmail}
            onChange={props.registrationEmailChangeHandler}
            fullWidth={true}
        />
        <TextField
            name="password"
            type="password"
            floatingLabelText="Password"
            value={props.registrationPassword}
            onChange={props.registrationPasswordChangeHandler}
            fullWidth={true}
        />
        <TextField
            name="confirmPassword"
            type="password"
            floatingLabelText="Confirm password"
            value={props.confirmedRegistrationPassword}
            onChange={props.confirmedRegistrationPasswordChangeHandler}
            fullWidth={true}
        />
        <RaisedButton
            style={{ margin: '5px 0' }}
            label={'Sign Up!'}
            primary={true}
            onClick={props.onSignUpClick}
            fullWidth={true}
        />
    </Paper>
)

export default RegistrationForm