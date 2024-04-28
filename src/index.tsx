import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './containers/App/App'
import './index.css'
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './containers/App/App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
