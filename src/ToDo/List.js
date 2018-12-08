import React from 'react'

import Task from './Task'

const List = (props) => (
    <div>
        {
            props.tasksList &&
            props.tasksList.map &&
            props.tasksList
                .filter((task) => {
                    switch (props.chosenFilter) {
                        case 'ALl':
                            return true
                        case 'COMPLETED':
                            return task.isCompleted
                        case 'UNCOMPLETED':
                            return !task.isCompleted
                        default:
                            return true

                    }
                })
                .filter((task) => (
                    task.taskText
                        .toLowerCase()
                        .replace(/\s/g, '')
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, "")
                        .includes(
                            props.filterText
                                .toLowerCase()
                                .replace(/\s/g, '')
                                .normalize('NFD')
                                .replace(/[\u0300-\u036f]/g, "")
                        )
                ))
                .map(
                    task => <Task
                        key={task.key}
                        task={task}
                        deleteTask={props.deleteTask}
                        toggleTask={props.toggleTask}
                    />
                )
        }
    </div>
)

export default List