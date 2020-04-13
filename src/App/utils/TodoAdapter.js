const TodoAdapter = request => {
  const externalTodos = request.data
  return externalTodos.map(externalTodo => ({
    id: externalTodo.id,
    title: externalTodo.title,
    completed: externalTodo.completed
  }))
}

export default TodoAdapter
