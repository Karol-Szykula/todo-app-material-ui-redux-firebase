import { database } from '../firebase'

const ADD_TASK = 'tasks/ADD_TASK'
const DELETE_TASK = 'tasks/DELETE_TASK'
const TOGGLE_TASK = 'tasks/TOGGLE_TASK'

const SAVE_TASKS_FROM_DB_TO_STATE = 'tasks/SAVE_TASKS_FROM_DB_TO_STATE'
const TASK_TEXT_CHANGE = 'tasks/TASK_TEXT_CHANGE'

const FILTER_TEXT_CHANGE = 'tasks/FILTER_TEXT_CHANGE'
const CHOOSE_FILTER_ALL = 'tasks/CHOOSE_FILTER_ALL'
const CHOOSE_FILTER_COMPLETED = 'tasks/CHOOSE_FILTER_COMPLETED'
const CHOOSE_FILTER_UNCOMPLETED = 'tasks/CHOOSE_FILTER_UNCOMPLETED'

export const addTaskAsyncAction = () => (dispatch, getState) => {
    dispatch(addTaskAction())

    const uuid = getState().auth.user.uid
    database.ref(`/users/${uuid}/`).set({
        tasks: JSON.stringify(getState().tasks.tasks)
    })
}

export const toggleTaskAsyncAction = (taskKey) => (dispatch, getState) => {
    dispatch(toggleTaskAction(taskKey))

    const uuid = getState().auth.user.uid
    database.ref(`/users/${uuid}/`).set({
        tasks: JSON.stringify(getState().tasks.tasks)
    })
}

export const deleteTaskAsyncAction = (taskKey) => (dispatch, getState) => {
    dispatch(deleteTaskAction(taskKey))

    const uuid = getState().auth.user.uid
    database.ref(`/users/${uuid}/`).set({
        tasks: JSON.stringify(getState().tasks.tasks)
    })
}

export const loadTasksFromDbAsyncAction = () => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/`).once(
        'value',
        snapshot => {
            if (snapshot.val() !== null) {
                const tasksFromDb = JSON.parse((snapshot.val().tasks))
                dispatch(
                    saveTasksFromDbToState(tasksFromDb)
                )
            }
        }
    )
}

const saveTasksFromDbToState = (tasks) => ({
    type: SAVE_TASKS_FROM_DB_TO_STATE,
    tasks
})

export const chooseFilterAllAction = () => ({
    type: CHOOSE_FILTER_ALL
})

export const chooseFilterCompletedAction = () => ({
    type: CHOOSE_FILTER_COMPLETED
})

export const chooseFilterUncompletedAction = () => ({
    type: CHOOSE_FILTER_UNCOMPLETED
})

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
    chosenFilter: 'ALL',
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
                state.newTaskText = ''
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

        case SAVE_TASKS_FROM_DB_TO_STATE:
            return {
                ...state,
                tasks: action.tasks
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

        case CHOOSE_FILTER_ALL:
            return {
                ...state,
                chosenFilter: 'ALL'
            }

        case CHOOSE_FILTER_COMPLETED:
            return {
                ...state,
                chosenFilter: 'COMPLETED'
            }

        case CHOOSE_FILTER_UNCOMPLETED:
            return {
                ...state,
                chosenFilter: 'UNCOMPLETED'
            }


        default:
            return state
    }
}