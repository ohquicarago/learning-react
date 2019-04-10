import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Introduction from './Introduction';
import Work from './Work';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Introduction />, document.getElementById('intro'));
ReactDOM.render(<Work />, document.getElementById('work'));
ReactDOM.render(<Contact />, document.getElementById('contact'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();