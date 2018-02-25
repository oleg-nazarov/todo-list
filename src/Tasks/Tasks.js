import React, { Component } from 'react';
import * as _ from 'lodash';
import './Tasks.css';

class Tasks extends Component {
  handleTaskOnClick = id => () => {
    const { taskToggleDone } = this.props;

    taskToggleDone(id);
  }

  render() {
    const { list } = this.props;

    return _.isEmpty(list) ? (
      <div className="d-flex justify-content-center align-items-center not-tasks-notification">
        Вспомните нечто важное и создайте Вашу задачу!
      </div>
    ) : (
      _.map(list, (task, id) => (
        <div
          className="d-flex align-items-center row task-row"
          key={id}
          onClick={this.handleTaskOnClick(id)}
        >
          <i className="col-2 text-center align-self-start material-icons">
            {task.done ? `check_box`: `check_box_outline_blank`}
          </i>
          <span className={`col-10${task.done ? ' font-style-italic' : ''}`}>{task.description}</span>
        </div>
      ))
    );
  }
}

export default Tasks;
