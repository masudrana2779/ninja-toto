import React, { Component } from "react";
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
    if (this.state.todoValuInput === "" ) {
      alert("Add todo");
    } else {
      let todos = [
        ...this.state.todos,
        { id: Math.random(), content: this.state.todoValuInput },
      ];
      this.setState({
        todoValuInput: "",
        todos: todos,
      });
      localStorage.setItem("todos", JSON.stringify(todos));
    }
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


  componentDidMount() {
    let todoData = localStorage.getItem("todos")
    console.log(todoData,5454545454);
  }

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
      </div>
    );
  }
}
export default App;
