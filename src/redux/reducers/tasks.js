const initialState = {
  list: [
    {
      id: 1,
      description: 'Lorem ipsum dolores',
      done: false
    },
    {
      id: 2,
      description: 'Per aspera ad astra',
      done: true
    },
  ]
};

const tasks = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default tasks;


