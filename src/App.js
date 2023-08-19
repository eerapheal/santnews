import Routess from './Routess'

import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store/store';

const App = () => {
  return (
    <Provider store={store}>
      < Routess />
    </Provider>
  );
};

export default App;
