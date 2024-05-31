import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/tasks';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await axios.post(apiUrl, task);
  return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (task) => {
  const response = await axios.put(`${apiUrl}/${task.id}`, task);
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
  await axios.delete(`${apiUrl}/${id}`);
  return id;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    filterTasks: (state, action) => {
      if (action.payload === 'All') {
        return state;
      }
      return state.filter((task) => task.status === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        state[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        return state.filter((task) => task.id !== action.payload);
      });
  },
});

export const { filterTasks } = taskSlice.actions;
export default taskSlice.reducer;
