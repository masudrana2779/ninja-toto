import React from "react";

const Todos = ({ todos,deleteTodo, editTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo, i) => {
      return (
        <div className="collection-item" key={i}>
          <div>{todo.content}</div>
          <div><span onClick={()=>deleteTodo(todo.id)}>Delete </span> <span onClick={()=>editTodo(todo.id)}> Edit</span></div>
        </div>
      );
    })
  ) : (
    <p className="center">You have No todos</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
