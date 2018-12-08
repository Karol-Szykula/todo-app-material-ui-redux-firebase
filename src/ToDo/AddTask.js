import React from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const style = {
    button: {
        margin: 12
    }
}

const AddTask = (props) => (
    <div >
        <TextField
            id="add-task"
            type='text'
            placeholder="Add task"
            value={props.newTaskText}
            onChange={props.onNewTaskTextChangeHandler}
            fullWidth={true}
        />
        <RaisedButton
            primary={true}
            onClick={props.addTask}
            label={'Add task'}
            style={style.button}
            fullWidth={true}
        />
    </div>
)

export default AddTask