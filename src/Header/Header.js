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
      <div className="d-flex justify-content-between align-items-center bg-light">
        <span>TODO list</span>
        <i
          className="material-icons"
          onClick={this.handleDeleteOnClick}
        >delete</i>
      </div>
    );
  }
}

export default Header;
