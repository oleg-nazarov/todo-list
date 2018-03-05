import * as _ from 'lodash';

const deleteDoneTasks = (list) => {
  const clonedList = _.cloneDeep(list);

  return _.forEach(clonedList, (task, index) => {
    if (task.done) {
      delete clonedList[index];
    }
  });
};

export default deleteDoneTasks;
