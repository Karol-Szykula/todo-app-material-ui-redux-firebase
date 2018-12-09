import React from 'react'

import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'

import AddTask from './AddTask'
import List from './List'
import Search from './Search'
import {
    addTaskAsyncAction,
    toggleTaskAsyncAction,
    deleteTaskAsyncAction,
    taskTextChangeAction,
    filterTextChangeAction,
    chooseFilterAllAction,
    chooseFilterCompletedAction,
    chooseFilterUncompletedAction
} from '../state/tasks';

const style = {
    paper: {
        margin: 20
    }
}


const ToDo = (props) => (

    <Paper
        style={style.paper}
    >
        <AddTask
            newTaskText={props.newTaskText}
            onNewTaskTextChangeHandler={props.taskTextChange}
            addTask={props.addTask}
        />

        <Search
            chosenFilter={props.chosenFilter}
            filterText={props.filterText}
            onFilterTextChangeHandler={props.filterTextChange}
            onAllClickHandler={props.chooseFilterAllAction}
            onCompletedClickHandler={props.chooseFilterCompletedAction}
            onUnCompletedClickHandler={props.chooseFilterUncompletedAction}
        />

        <List
            filterText={props.filterText}
            chosenFilter={props.chosenFilter}
            tasksList={props.tasks}
            toggleTask={props.toggleTask}
            deleteTask={props.deleteTask}
        />
    </Paper >
)

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
    newTaskText: state.tasks.newTaskText,
    filterText: state.tasks.filterText,
    chosenFilter: state.tasks.chosenFilter,
})

const mapDispatchToProps = (dispatch) => ({
    addTask: () => dispatch(addTaskAsyncAction()),
    toggleTask: (taskKey) => dispatch(toggleTaskAsyncAction(taskKey)),
    deleteTask: (taskKey) => dispatch(deleteTaskAsyncAction(taskKey)),
    taskTextChange: (event) => dispatch(taskTextChangeAction(event.target.value)),
    filterTextChange: (event) => dispatch(filterTextChangeAction(event.target.value)),
    chooseFilterAllAction: () => dispatch(chooseFilterAllAction()),
    chooseFilterCompletedAction: () => dispatch(chooseFilterCompletedAction()),
    chooseFilterUncompletedAction: () => dispatch(chooseFilterUncompletedAction()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)