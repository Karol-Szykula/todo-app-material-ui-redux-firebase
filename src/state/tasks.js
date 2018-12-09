const ADD_TASK = 'todo/ADD_TASK'
const DELETE_TASK = 'todo/DELETE_TASK'
const TOGGLE_TASK = 'todo/TOGGLE_TASK'

export const addTask = (task) => ({
    type: ADD_TASK,
    task
})

export const toggleTask = () => ({
    type: TOGGLE_TASK
})

export const deleteTask = (task) => ({
    type: DELETE_TASK,
    task
})

const INITIAL_STATE = {
    tasks: [],
    visibleTasks: [],
    filterText: '',
    chosenFilter: 'All',
    newTaskText: ''

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ADD_TASK:
            return {}

        case TOGGLE_TASK:
            return {}

        case DELETE_TASK:
            return {}


        default:
            return state
    }
}