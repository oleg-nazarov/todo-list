import {
  TASK_TOGGLE_DONE,
  ADD_TASK,
  DELETE_TASK
} from '../types/tasks';

export const taskToggleDone = id => ({
  type: TASK_TOGGLE_DONE,
  payload: id
});

export const addTask = (id, description) => ({
  type: ADD_TASK,
  payload: {
    id,
    description
  }
});

export const deleteTask = () => ({
  type: DELETE_TASK
});
