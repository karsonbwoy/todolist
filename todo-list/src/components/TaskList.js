import React, { useState } from 'react';
import TaskForm from './TaskForm';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { task, completed: false }]);
  };

  const handleTaskClick = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <h2>Lista zadań</h2>
      <ul>
        {tasks.map((taskObj, index) => (
          <li
            key={index}
            className={taskObj.completed ? 'completed' : ''}
          >
            <span onClick={() => handleTaskClick(index)}>
              {taskObj.task}
            </span>
            <button onClick={() => handleTaskDelete(index)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;