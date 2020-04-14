const TaskReducer = (state, action) => {
  const toggleTask = () => {
    return {
      tasks: state.tasks.map(task => {
        if (task.id !== action.payload.id) { return task }
        task.completed = !action.payload.completed
      }),
      ...state
    }
  }

  switch (action.type) {
    case 'FETCH_TASKS':
      return {
        isLoading: false,
        tasks: action.payload
      }
    case 'TOGGLE_TASK':
      return toggleTask()
    default:
      return state
  }
}

export default TaskReducer
