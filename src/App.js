import React from 'react';
import { Header, AddToDoTask, TasksSpace } from './components';

const App = () => {
  return (
    <div className="app">
      <Header />
      <AddToDoTask />
      <TasksSpace />
    </div>
  );
};

export default App;