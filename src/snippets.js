  addTodo = text => {
    this.setState({
      todos: this.state.todos.concat({
        text,
        done: false
      }),
      text: ''
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
}