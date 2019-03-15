import React, { Component } from 'react';
import { Navigation } from "./components/Navigation";
import { Images } from './components/Images';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Images />
        <Navigation />
      </div>
    );
  }
}

export default App;
