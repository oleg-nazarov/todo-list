import {
  TASK_TOGGLE_DONE,
  ADD_TASK,
  UPDATE_LIST
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

export const updateList = list => ({
  type: UPDATE_LIST,
  payload: list
});
