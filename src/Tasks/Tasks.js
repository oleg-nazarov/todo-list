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
          className="row"
          key={id}
          onClick={this.handleTaskOnClick(id)}
        >
          <span className="col-2 text-center">{JSON.stringify(task.done)}</span>
          <span className="col-10">{task.description}</span>
        </div>
      ))
    );
  }
}

export default Tasks;
