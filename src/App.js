import React, { Component } from "react";
import AddTodo from "./addTodo";
import Todos from "./todos";

class App extends Component {
  state = {
    todos: [],
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
        todos
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
  
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  

  // Edit

  handleEdit = (id) => {
    console.log(id)
  }

  addTodo = (todo) => {
    console.log(todo);
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  componentDidMount() {
    let todoData = JSON.parse(localStorage.getItem("todos"))
    this.setState({todos: this.state.todos.concat(todoData)});
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
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.handleEdit} />
        <AddTodo addTodo={this.addTodo} /> 
      </div>
    );
  }
}
export default App;
