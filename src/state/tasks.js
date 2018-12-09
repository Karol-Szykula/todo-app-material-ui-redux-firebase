const ADD_TASK = 'todo/ADD_TASK'
const DELETE_TASK = 'todo/DELETE_TASK'
const TOGGLE_TASK = 'todo/TOGGLE_TASK'
const TASK_TEXT_CHANGE = 'todo/TOGGLE_TASK'

export const taskTextChange = (newText) => ({
    type: TASK_TEXT_CHANGE,
    newText
})

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
            const allTasksWithToggled = state.tasks.map((task, index) => (index === action.index)
                ? { ...task, completed: !task.completed }
                : task
            )
            return {
                ...state,
                tasks: allTasksWithToggled
            }

        case DELETE_TASK:
            const allTasksWithDeleted = state.tasks.filter((task, index) => !(index === action.index))
            return {
                ...state,
                allTasks: allTasksWithDeleted
            }

        case TASK_TEXT_CHANGE:
            return {
                ...state,
                newTaskText: action.newText
            }


        default:
            return state
    }
}