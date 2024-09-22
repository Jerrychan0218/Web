import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Cardlist from './CardList';
import App from './App'; //創造App來作為最高位的父親，取代ＣardList
import 'tachyons'
// import { robots } from './robots.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);