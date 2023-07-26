import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from 'components/App';
import 'style/index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <ToastContainer />
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
