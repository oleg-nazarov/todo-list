import React, { Component } from 'react';
import ProptTypes from 'prop-types';
import './TaskCreatingPanel.css';

class TaskCreatingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      isError: false
    }
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

    addTask(description);

    this.setState({
      description: ''
    })
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
      <div className="panel">
        <div className="row d-flex align-items-center">
          <i
            className="col-2 text-center material-icons plus-icon"
            onClick={this.addTask}
          >add_box</i>

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

TaskCreatingPanel.propTypes = {
  addTask: ProptTypes.func.isRequired
};

export default TaskCreatingPanel;
