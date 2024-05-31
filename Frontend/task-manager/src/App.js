import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { fetchTasks } from './redux/taskSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Task Management</h1>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default App;
