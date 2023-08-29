import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { task, completed: false }]);
  };

  const handleTaskClick = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (index, e) => {
    e.stopPropagation();
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      <TaskForm addTask={addTask} />
      <ul className="task-list">
        {tasks.map((taskObj, index) => (
          <li
            key={index}
            className={`task-item ${taskObj.completed ? 'completed' : ''}`}
            onClick={() => handleTaskClick(index)}
          >
            <div className="task-text-container">
              <span className="task-text">{taskObj.task}</span>
            </div>
            <div className="delete-button-container">
              <button className="delete-button" onClick={(e) => handleTaskDelete(index, e)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
