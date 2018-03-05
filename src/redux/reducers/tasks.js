import {
  TASK_TOGGLE_DONE,
  ADD_TASK,
  DELETE_DONE_TASKS
} from '../types/tasks';
import {
  deleteDoneTasks,
  freeIdForNewTask
} from '../../services';

const initialState = {
  list: {}
};

const tasks = (state = initialState, action) => {
  switch(action.type) {
    case TASK_TOGGLE_DONE:
      const task = state.list[action.payload];
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload]: {
            ...task,
            done: !task.done
          }
        }
      };

    case ADD_TASK:
      const id = freeIdForNewTask(state.list);

      return {
        ...state,
        list: {
          ...state.list,
          [id]: {
            description: action.payload,
            done: false
          }
        }
      };

    case DELETE_DONE_TASKS:
      const newList = deleteDoneTasks(state.list);

      return {
        ...state,
        list: newList
      };

    default:
      return state;
  }
};

export default tasks;


