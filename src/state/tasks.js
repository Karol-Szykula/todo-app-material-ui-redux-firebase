const ADD_TASK = 'tasks/ADD_TASK'
const DELETE_TASK = 'tasks/DELETE_TASK'
const TOGGLE_TASK = 'tasks/TOGGLE_TASK'
const TASK_TEXT_CHANGE = 'tasks/TASK_TEXT_CHANGE'

const FILTER_TEXT_CHANGE = 'tasks/FILTER_TEXT_CHANGE'

export const filterTextChangeAction = (newFilter) => ({
    type: FILTER_TEXT_CHANGE,
    newFilter
})

export const taskTextChangeAction = (newText) => ({
    type: TASK_TEXT_CHANGE,
    newText
})

export const addTaskAction = () => ({
    type: ADD_TASK,
})

export const toggleTaskAction = (taskKey) => ({
    type: TOGGLE_TASK,
    taskKey
})

export const deleteTaskAction = (taskKey) => ({
    type: DELETE_TASK,
    taskKey
})

const INITIAL_STATE = {
    tasks: [],
    newTaskText: '',
    filterText: '',
    chosenFilter: 'All',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ADD_TASK:
            if (state.newTaskText !== '') {
                const newTask = {
                    taskText: state.newTaskText,
                    isCompleted: false,
                    key: Date.now()
                }
                return {
                    ...state,
                    tasks: [...state.tasks, newTask]
                }
            }
            else {
                return state
            }
        case TOGGLE_TASK:
            const allTasksWithToggled = state.tasks.map((task) => (
                (task.key === action.taskKey)
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
            ))
            return {
                ...state,
                tasks: allTasksWithToggled
            }

        case DELETE_TASK:
            const allTasksWithDeleted = state.tasks.filter((task) => !(task.key === action.taskKey))
            return {
                ...state,
                tasks: allTasksWithDeleted
            }

        case TASK_TEXT_CHANGE:
            return {
                ...state,
                newTaskText: action.newText
            }

        case FILTER_TEXT_CHANGE:
            return {
                ...state,
                filterText: action.newFilter
            }


        default:
            return state
    }
}