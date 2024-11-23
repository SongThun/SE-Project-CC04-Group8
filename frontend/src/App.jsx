import React from 'react';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      <header>
        <h1>Simple Demo</h1>
      </header>
      <main>
        {console.log('App.jsx')}
        <Outlet/>
      </main>
    </>
  );
};

export default App;
