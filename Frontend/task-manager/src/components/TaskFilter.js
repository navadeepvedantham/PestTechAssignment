import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../redux/taskSlice';

const TaskFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="All">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  );
};

export default TaskFilter;
