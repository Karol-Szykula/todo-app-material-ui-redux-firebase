import React from 'react'

import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'

import AddTask from './AddTask'
import List from './List'
import Search from './Search'
import {
    addTaskAction,
    toggleTaskAction,
    deleteTaskAction,
    taskTextChangeAction,
    filterTextChangeAction,
} from '../state/tasks';

const style = {
    paper: {
        margin: 20
    }
}


const ToDo = (props) => (

    // state = (
    //     JSON.parse(localStorage.getItem('to-do-list-state'))
    //     ||
    //     {
    //         tasks: [],
    //         filterText: '',
    //         chosenFilter: 'ALL',
    //         newTaskText: ''
    //     }
    // )

    // componentDidUpdate() {
    //     this.saveInLocalStorage()
    // }

    // saveInLocalStorage = () => localStorage.setItem(
    //     'to-do-list-state',
    //     JSON.stringify(this.state)
    // )

    // createTask = text => ({
    //     taskText: text,
    //     isCompleted: false,
    //     key: Date.now() //good enough
    // })

    // addTask = () => {
    //     if (this.state.newTaskText !== '') {
    //         this.setState({
    //             tasks: this.state.tasks.concat(
    //                 this.createTask(
    //                     this.state.newTaskText
    //                 )
    //             ),
    //             newTaskText: ''
    //         })
    //     }
    // }

    // deleteTask = taskKey => this.setState({
    //     tasks: this.state.tasks.filter(
    //         task => task.key !== taskKey
    //     )
    // })

    // toggleTask = taskKey => this.setState({
    //     tasks: this.state.tasks.map(
    //         task => (
    //             (task.key === taskKey) ?
    //                 {
    //                     ...task,
    //                     isCompleted: !task.isCompleted
    //                 }
    //                 :
    //                 task
    //         )
    //     )
    // })

    // onAllClickHandler = () => this.setState({ chosenFilter: 'ALL' })
    // onCompletedClickHandler = () => this.setState({ chosenFilter: 'COMPLETED' })
    // onUnCompletedClickHandler = () => this.setState({ chosenFilter: 'UNCOMPLETED' })

    // onFilterTextChangeHandler = event => { this.setState({ filterText: event.target.value }) }
    // onNewTaskTextChangeHandler = event => { this.setState({ newTaskText: event.target.value }) }

    <Paper
        style={style.paper}
    >
        <AddTask
            newTaskText={props.newTaskText}
            onNewTaskTextChangeHandler={props.taskTextChange}
            addTask={props.addTask}
        />

        <Search
        // chosenFilter={this.state.chosenFilter}
        // filterText={this.state.filterText}
        // onFilterTextChangeHandler={this.onFilterTextChangeHandler}
        // onAllClickHandler={this.onAllClickHandler}
        // onCompletedClickHandler={this.onCompletedClickHandler}
        // onUnCompletedClickHandler={this.onUnCompletedClickHandler}
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
    addTask: () => dispatch(addTaskAction()),
    toggleTask: (index) => dispatch(toggleTaskAction(index)),
    deleteTask: (index) => dispatch(deleteTaskAction(index)),
    taskTextChange: (event) => dispatch(taskTextChangeAction(event.target.value)),
    filterTextChange: (event) => dispatch(filterTextChangeAction(event.target.value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)