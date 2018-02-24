import { TASK_TOGGLE_DONE } from '../types/tasks';

export const taskToggleDone = id => ({
  type: TASK_TOGGLE_DONE,
  payload: id
});
