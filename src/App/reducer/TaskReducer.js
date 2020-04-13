const TaskReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TASKS_SUCCESS':
      return {
        isLoading: false,
        tasks: action.payload,
        error: ''
      }
    case 'FETCH_TASKS_FAIL':
      return {
        isLoading: false,
        tasks: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default TaskReducer
