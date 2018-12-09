import React from 'react'

import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'

import AddTask from './AddTask'
import List from './List'
import Search from './Search'
import {
    addTask,
    toggleTask,
    deleteTask,
} from '../state/tasks';

const style = {
    paper: {
        margin: 20
    }
}


class ToDo extends React.Component {

    state = (
        JSON.parse(localStorage.getItem('to-do-list-state'))
        ||
        {
            tasks: [],
            filterText: '',
            chosenFilter: 'ALL',
            newTaskText: ''
        }
    )

    componentDidUpdate() {
        this.saveInLocalStorage()
    }

    saveInLocalStorage = () => localStorage.setItem(
        'to-do-list-state',
        JSON.stringify(this.state)
    )

    createTask = text => ({
        taskText: text,
        isCompleted: false,
        key: Date.now() //good enough
    })

    addTask = () => {
        if (this.state.newTaskText !== '') {
            this.setState({
                tasks: this.state.tasks.concat(
                    this.createTask(
                        this.state.newTaskText
                    )
                ),
                newTaskText: ''
            })
        }
    }

    deleteTask = taskKey => this.setState({
        tasks: this.state.tasks.filter(
            task => task.key !== taskKey
        )
    })

    toggleTask = taskKey => this.setState({
        tasks: this.state.tasks.map(
            task => (
                (task.key === taskKey) ?
                    {
                        ...task,
                        isCompleted: !task.isCompleted
                    }
                    :
                    task
            )
        )
    })

    onAllClickHandler = () => this.setState({ chosenFilter: 'ALL' })
    onCompletedClickHandler = () => this.setState({ chosenFilter: 'COMPLETED' })
    onUnCompletedClickHandler = () => this.setState({ chosenFilter: 'UNCOMPLETED' })

    onFilterTextChangeHandler = event => { this.setState({ filterText: event.target.value }) }
    onNewTaskTextChangeHandler = event => { this.setState({ newTaskText: event.target.value }) }

    render() {
        return (
            <Paper
                style={style.paper}
            >
                <AddTask
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChangeHandler={this.onNewTaskTextChangeHandler}
                    addTask={this.addTask}
                />

                <Search
                    chosenFilter={this.state.chosenFilter}
                    filterText={this.state.filterText}
                    onFilterTextChangeHandler={this.onFilterTextChangeHandler}
                    onAllClickHandler={this.onAllClickHandler}
                    onCompletedClickHandler={this.onCompletedClickHandler}
                    onUnCompletedClickHandler={this.onUnCompletedClickHandler}
                />

                <List
                    filterText={this.state.filterText}
                    chosenFilter={this.state.chosenFilter}
                    tasksList={this.state.tasks}
                    deleteTask={this.deleteTask}
                    toggleTask={this.toggleTask}
                />
            </Paper >
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    addTask: (event) => dispatch(addTask(event.target.value)),
    toggleTask: (index) => dispatch(toggleTask(index)),
    deleteTask: (index) => dispatch(deleteTask(index)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)