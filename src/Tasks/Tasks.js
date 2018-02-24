import React, { Component } from 'react';

class Tasks extends Component {
  render() {
    const { list } = this.props;

    return (
      list.map(task => (
        <div key={task.id}>
          <span>{JSON.stringify(task.done)}</span>
          <span>{task.description}</span>
        </div>
      ))
    );
  }
}

export default Tasks;
