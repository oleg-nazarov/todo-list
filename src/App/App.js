import React from 'react';
import { Header } from '../Header/index';
import { Tasks } from '../Tasks/index';
import { TaskCreatingPanel } from '../TaskCreatingPanel/index';
import './App.css';

const App = () => (
  <div className="container-fluid body">
    <div className="row justify-content-center">
      <div className="col col-sm-10 col-md-8 col-lg-6 main">
        <Header />
        <Tasks />
        <TaskCreatingPanel />
      </div>
    </div>
  </div>
);

export default App;
