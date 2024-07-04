import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a todo" 
        className="todo-input"
      />
      <button type="submit" className="todo-button">Add</button>
    </form>
  );
};

export default TodoForm;
