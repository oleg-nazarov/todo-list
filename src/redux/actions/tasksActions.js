import {
  TASK_TOGGLE_DONE,
  ADD_TASK,
  DELETE_DONE_TASKS
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

export const deleteDoneTasks = () => ({
  type: DELETE_DONE_TASKS
});
