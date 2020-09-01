import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Calculator from "./main/Calculator"

ReactDOM.render(
  <React.StrictMode>
    <h2>Calculadora</h2>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
