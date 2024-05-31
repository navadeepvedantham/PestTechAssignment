import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (e) => {
    dispatch(updateTask({ ...task, status: e.target.value }));
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;