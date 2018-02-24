import React, { Component } from 'react';
import * as _ from 'lodash';

class Tasks extends Component {
  handleTaskOnClick = id => () => {
    const { taskToggleDone } = this.props;

    taskToggleDone(id);
  }

  render() {
    const { list } = this.props;

    return (
      _.map(list, (task, id) => (
        <div
          key={id}
          onClick={this.handleTaskOnClick(id)}
        >
          <span>{JSON.stringify(task.done)}</span>
          <span>{task.description}</span>
        </div>
      ))
    );
  }
}

export default Tasks;
