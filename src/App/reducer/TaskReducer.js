const TaskReducer = (state, action) => {
  const fetchTasks = () => ({ isLoading: false, tasks: action.payload })

  const toggleTask = () => {
    return {
      tasks: state.tasks.map(task => {
        if (task.id !== action.payload.id) { return task }
        task.completed = !action.payload.completed
        return task
      }),
      ...state
    }
  }

  const editTask = () => {
    return {
      tasks: state.tasks.map(task => {
        if (task.id !== action.payload.id) { return task }
        task.title = action.payload.newTitle
        return task
      }),
      ...state
    }
  }

  switch (action.type) {
    case 'FETCH_TASKS':
      return fetchTasks()
    case 'TOGGLE_TASK':
      return toggleTask()
    case 'EDIT_TASK':
      return editTask()
    default:
      return state
  }
}

export default TaskReducer
