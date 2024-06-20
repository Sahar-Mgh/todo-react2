import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, editTodo, deleteTodo, completeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          editTodo={editTodo} 
          deleteTodo={deleteTodo} 
          completeTodo={completeTodo} 
        />
      ))}
    </ul>
  );
};

export default TodoList;
