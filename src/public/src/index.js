import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './store';
import './i18n';

ReactDOM.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);
