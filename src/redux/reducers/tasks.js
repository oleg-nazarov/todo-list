import {
  TASK_TOGGLE_DONE,
  ADD_TASK,
  UPDATE_LIST
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

    case UPDATE_LIST:
      return {
        ...state,
        list: action.payload
      };

    default:
      return state;
  }
};

export default tasks;


