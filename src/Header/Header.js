import React, { Component } from 'react';
import * as _ from 'lodash';

class Header extends Component {
  handleDeleteOnClick = () => {
    const { updateList, list } = this.props;

    const newList = this.deleteDoneTasks(list);

    updateList(newList);
  }

  deleteDoneTasks = (list) => {
    const clonedList = _.cloneDeep(list);

    return _.forEach(clonedList, (task, index) => {
      if (task.done) {
        delete clonedList[index];
      }
    });
  }

  render() {
    return (
      <div className="d-flex justify-content-between flex-row bg-light">
        <div>TODO list</div>
        <div onClick={this.handleDeleteOnClick}>delete-button</div>
      </div>
    );
  }
}

export default Header;
