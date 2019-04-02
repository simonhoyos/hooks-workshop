import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Workshop
import App from './App';
// Example
// import { Clock } from "./example/Clock";

// Workshop
ReactDOM.render(<App />, document.getElementById('root'));
// Example
// ReactDOM.render(<Clock />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
