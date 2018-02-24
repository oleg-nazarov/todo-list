import React from 'react';
import { Header } from './Header';
import { Tasks } from './Tasks';
import { TaskCreatingPanel } from './TaskCreatingPanel';

const App = () => (
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col col-sm-10 col-md-8 col-lg-6">
        <Header />
        <Tasks />
        <TaskCreatingPanel />
      </div>
    </div>
  </div>
);

export default App;
