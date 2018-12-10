import React from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import { ListItem } from 'material-ui/List';

const completedStyle = {
    textDecoration: 'line-through'
}

const style = {
    button: {
        margin: 12
    }
}

const Task = (props) => (
    <ListItem
        onClick={() => props.toggleTask(props.task.key)}
    >
        <span
            style={props.task.isCompleted ? completedStyle : {}}
        >
            {props.task.taskText}
        </span>
        <RaisedButton
            onClick={() => props.deleteTask(props.task.key)}
            label={'Delete'}
            style={style.button}
        />
    </ListItem>
)

export default Task