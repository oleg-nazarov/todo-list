import React, { Component } from 'react';

class TaskCreatingPanel extends Component {
  render() {
    return (
      <div className="row">
        <span className="col-2 text-center">plus</span>
        <input className="col-10 form-control" type="text" />
      </div>
    );
  }
}

export default TaskCreatingPanel;
