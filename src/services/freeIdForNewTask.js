import * as _ from 'lodash';

const freeIdForNewTask = (list) => {
  if (_.isEmpty(list)) return 1;

  const keys = Object.keys(list)
    .map(key => Number(key));

  let lastId = keys.sort((a,b) => a < b)[0];

  return lastId + 1;
};

export default freeIdForNewTask;
