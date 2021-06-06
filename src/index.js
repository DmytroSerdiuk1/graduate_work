import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App'


import {Provider} from 'react-redux';
import Error from './components/Error';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Error>
      <Provider store={store}>
        <App/>
      </Provider>
    </Error>
  </React.StrictMode>,
  document.getElementById('root')
);
