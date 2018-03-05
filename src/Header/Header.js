import React, { Component } from 'react';
import * as _ from 'lodash';
import ProptTypes from 'prop-types';
import './Header.css';

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

Header.propTypes = {
  deleteDoneTasks: ProptTypes.func.isRequired
};

export default Header;
