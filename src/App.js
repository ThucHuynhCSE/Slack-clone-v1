import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      {/** header */}
      <Header />
      <div className='app__body'>
        {/** sideBar */}
        <Sidebar />
        {/** chatScreen */}
      </div>


    </div>
  );
}

export default App;
