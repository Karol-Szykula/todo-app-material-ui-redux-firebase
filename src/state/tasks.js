const ADD_TASK = 'todo/ADD_TASK'
const DELETE_TASK = 'todo/DELETE_TASK'
const TOGGLE_TASK = 'todo/TOGGLE_TASK'

export const addTask = (task) => ({
    type: ADD_TASK,
    task
})

export const toggleTask = (index) => ({
    type: TOGGLE_TASK,
    index
})

export const deleteTask = (index) => ({
    type: DELETE_TASK,
    index
})

const INITIAL_STATE = {
    tasks: [],
    newTaskText: '',
    // visibleTasks: [],
    filterText: '',
    chosenFilter: 'All',

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