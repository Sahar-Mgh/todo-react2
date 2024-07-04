import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, deleteTodo, completeTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTodo(todo.id, newText));
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
            className="edit-input"
          />
          <button onClick={handleSave} className="save-button">Save</button>
        </>
      ) : (
        <>
          <span>
            {todo.text}
          </span>
          <div>
            <button onClick={handleEdit} className="edit-button">Edit</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="delete-button">Delete</button>
            <button onClick={() => dispatch(completeTodo(todo.id))} className="complete-button">
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
