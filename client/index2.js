import React from "react";
import { render } from 'react-dom';
import {Provider} from 'react-redux'

import App from './components2/App'
import store from './components2/Redux'

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
