import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navbar';
import Topbar from './Topbar';

function App() {
  return (
    <div className="App">
      <div className="row">
        <Navigation />
        <Topbar />
      </div>
    </div>
  );
}

export default App;
