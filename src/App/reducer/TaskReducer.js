const TaskReducer = (state, action) => {
  const fetchTasks = () => ({ isLoading: false, tasks: action.payload })

  const addTask = () => ({
    ...state,
    tasks: [...state.tasks, action.payload]
  })

  const toggleTask = () => ({
    ...state,
    tasks: state.tasks.map(task => {
      if (task.id === action.payload.id) {
        task.completed = !action.payload.completed
      }
      return task
    })
  })

  const editTask = () => ({
    ...state,
    tasks: state.tasks.map(task => {
      if (task.id === action.payload.id) {
        task.title = action.payload.newTitle
      }

      return task
    })
  })

  const deleteTask = () => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== action.payload.id)
  })

  console.log(action)

  switch (action.type) {
    case 'FETCH_TASKS':
      return fetchTasks()
    case 'TOGGLE_TASK':
      return toggleTask()
    case 'EDIT_TASK':
      return editTask()
    case 'ADD_TASK':
      return addTask()
    case 'DELETE_TASK':
      return deleteTask()
    default:
      return state
  }
}

export default TaskReducer
