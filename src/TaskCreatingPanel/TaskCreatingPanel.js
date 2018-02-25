import React, { Component } from 'react';
import * as _ from 'lodash';

class TaskCreatingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      isError: false
    }
  }

  findFreeIndex = () => {
    const { list } = this.props;

    if (_.isEmpty(list)) return 1;

    const keys = Object.keys(list)
      .map(key => Number(key));

    let lastId = keys.sort((a,b) => a < b)[0];

    return lastId + 1;
  }

  handleInputChange = (event) => {
    this.setError(false);

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

    if (!this.isTextValid()) {
      this.setError(true);
      return;
    }

    const id = this.findFreeIndex();

    addTask(id, description);
  }

  setError = (bool) => {
    const { isError } = this.state;

    if (bool && !isError) {
      this.setState({
        isError: bool
      });
    } else if (!bool && isError) {
      this.setState({
        isError: bool
      });
    }
  }

  isTextValid = () => {
    const { description } = this.state;

    const textWithoutSpaces = description.replace(/\s/g, '');

    return textWithoutSpaces.length > 2
  }

  render() {
    const { description, isError } = this.state;

    return (
      <div>
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

        {isError && <div className="row">
          <div className="offset-2 col-10 alert alert-warning" role="alert">
            Поле должно содержать хотя бы 3 символа!
          </div>
        </div>}
      </div>
    );
  }
}

export default TaskCreatingPanel;
