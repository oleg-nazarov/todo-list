import React, { Component } from 'react';
import * as _ from 'lodash';

class TaskCreatingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'Тест:'
    }
  }

  findFreeIndex = () => {
    const { list } = this.props;

    if (_.isEmpty(list)) return 1;

    const keys = Object.keys(list)
      .map(key => Number(key));

    let firstId = keys.sort((a,b) => a > b)[0];

    while(true) {
      if (list[firstId + 1]) {
        firstId = firstId + 1;
      } else {
        return firstId + 1;
      }
    }
  }

  handleInputChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }

  addTask = () => {
    const { addTask } = this.props;
    const { description } = this.state;

    if (!this.isTextValid()) return;

    const id = this.findFreeIndex();


    addTask(id, description);
  }

  isTextValid = () => {
    const { description } = this.state;

    const textWithoutSpaces = description.replace(/\s/g, '');

    return textWithoutSpaces.length > 2
  }

  render() {
    const { description } = this.state;

    return (
      <div className="row">
        <span
          className="col-2 text-center"
          onClick={this.addTask}
        >plus</span>
        <input
          className="col-10 form-control"
          type="text"
          value={description}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default TaskCreatingPanel;
