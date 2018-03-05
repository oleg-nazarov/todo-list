import {
  TASK_TOGGLE_DONE,
  ADD_TASK,
  DELETE_DONE_TASKS
} from '../types/tasks';
import deleteDoneTasks from '../../services/deleteDoneTasks';

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
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.id]: {
            description: action.payload.description,
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


