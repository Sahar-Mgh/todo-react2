import React, { useState } from 'react';

const TodoItem = ({ todo, editTodo, deleteTodo, completeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
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
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
            <button onClick={() => completeTodo(todo.id)} className="complete-button">
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
