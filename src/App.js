import React, { Component } from "react";
import AddTodo from "./addTodo";
import Todos from "./todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some Milk" },
      { id: 2, content: "No need more today" },
    ],
    todoValuInput: "",
  };

  // add todo
  handleChange = (e) => {
    this.setState({
      todoValuInput: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  //   deleteTodo
  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  addTodo = (todo) => {
    console.log(todo);
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>

        <div className="input-field col s6">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              id="last_name"
              type="text"
              value={this.state.todoValuInput}
              onChange={(e) => this.handleChange(e)}
            />
            <button onClick={this.handleSubmit}>Add</button>
          </form>
        </div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
