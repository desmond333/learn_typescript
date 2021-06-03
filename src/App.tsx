import React from 'react';
import { Header, AddToDoTask, TasksSpace } from './components';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <AddToDoTask />
      <TasksSpace />
    </div>
  );
};

export default App;