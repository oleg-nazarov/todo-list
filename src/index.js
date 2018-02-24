import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';

render(
  <Provider store={store}>
    <div>You gotta do what you gotta do</div>
  </Provider>,
  document.getElementById('root')
);
