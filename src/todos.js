import React from "react";

const Todos = ({ todos,deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo, i) => {
      return (
        <div className="collection-item" key={i}>
          <div onClick={()=>deleteTodo(todo.id)}>{todo.content}</div>
        </div>
      );
    })
  ) : (
    <p className="center">You have No todos</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
