import { TASK_TOGGLE_DONE } from '../types/tasks';

const initialState = {
  list: {
    1: {
      description: 'Lorem ipsum dolores',
      done: false
    },
    2: {
      description: 'Per aspera ad astra',
      done: true
    }
  }
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
    default:
      return state;
  }
};

export default tasks;


