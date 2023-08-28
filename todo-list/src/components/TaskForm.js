import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={handleTaskTextChange}
        placeholder="Add a new task"
      />
      <button className="add-button" type="submit">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
