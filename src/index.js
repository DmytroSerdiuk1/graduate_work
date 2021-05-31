import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App'


import {Provider} from 'react-redux';
import Error from './components/Error';

ReactDOM.render(
  <React.StrictMode>
    <Error>
      <App/>
    </Error>
  </React.StrictMode>,
  document.getElementById('root')
);
