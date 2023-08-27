import React, { useState } from 'react';
import TaskForm from './TaskForm';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskClick = (index) => {
    if (completedTasks.includes(index)) {
      setCompletedTasks(completedTasks.filter((item) => item !== index));
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  };

  const handleTaskDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  
    // Jeśli usuwamy zadanie, należy je również usunąć z listy wykonanych zadań
    setCompletedTasks(completedTasks.filter((item) => item !== index));
  };
  

  return (
    <div>
      <TaskForm addTask={addTask} />
      <h2>Lista zadań</h2>
      <ul>
      {tasks.map((task, index) => (
        <li
            key={index}
            onClick={() => handleTaskClick(index)}
            className={completedTasks.includes(index) ? 'completed' : ''}
        >
            {task}
            <button onClick={() => handleTaskDelete(index)}>Usuń</button>
        </li>
      ))}

      </ul>
    </div>
  );
  
}

export default TaskList;
