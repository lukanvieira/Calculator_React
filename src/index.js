import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

const domNode = document.getElementById('root')
const root = createRoot(domNode);
root.render(
  <div>
    <h1>Calculator</h1>
    <Calculator />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
