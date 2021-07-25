import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './counter/App';
// import App from './form/App';
// import App from './todolist/App';
// import App from './mouse/App';
// import App from './timer/App';
import App from './useEffectPractice/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
