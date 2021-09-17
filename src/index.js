import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './tours';
ReactDOM.render(
  <React.StrictMode>
    <h1>Our Tours</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);