import {
  TASK_TOGGLE_DONE,
  ADD_TASK,
  DELETE_DONE_TASKS
} from '../types/tasks';

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
      return {
        ...state,
        list: action.payload
      };

    default:
      return state;
  }
};

export default tasks;


