import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App'

import RestoContext from './components/RestoContext';
import {Provider} from 'react-redux';
import Error from './components/Error';
import store from './store';
import RestoApi from './api';

const restoApi = new RestoApi();

ReactDOM.render(
  <React.StrictMode>
    <Error>
      <RestoContext.Provider value={restoApi}>
        <Provider store={store}>
          <App/>
        </Provider>
      </RestoContext.Provider>
    </Error>
  </React.StrictMode>,
  document.getElementById('root')
);
