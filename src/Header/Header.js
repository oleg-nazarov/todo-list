import React from 'react';
import ProptTypes from 'prop-types';
import './Header.css';

const Header = ({ deleteDoneTasks }) => (
  <div className="main d-flex justify-content-between align-items-center bg-light">
    <span>TODO list</span>
    <i
      className="material-icons delete-button"
      onClick={deleteDoneTasks}
    >delete</i>
  </div>
);

Header.propTypes = {
  deleteDoneTasks: ProptTypes.func.isRequired
};

export default Header;
