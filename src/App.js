import React from 'react';
import { Images } from './components/Images';
import { Navigation } from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Images />
      <Navigation />
    </div>
  );
}

export default App;
