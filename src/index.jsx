import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.scss';

import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root'),
);
