import React from 'react';
import ReactDOM from 'react-dom';
import { ResetCSS } from './global/resetCSS';
import App from './pages/app/App';

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
