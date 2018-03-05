import React, { Component } from 'react';
import * as _ from 'lodash';
import './Header.css';

class Header extends Component {
  handleDeleteOnClick = () => {
    const { deleteDoneTasks, list } = this.props;

    const newList = this.deleteDoneTasks(list);

    deleteDoneTasks(newList);
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
      <div className="main d-flex justify-content-between align-items-center bg-light">
        <span>TODO list</span>
        <i
          className="material-icons delete-button"
          onClick={this.handleDeleteOnClick}
        >delete</i>
      </div>
    );
  }
}

export default Header;
