import React, {useState} from 'react';
import Content from './Components/Content';

import { Provider } from 'react-redux'
// import bodySlice from './Components/Reducer/bodySlice';
import {store} from './Store/store';

function App() {

  return (
    <Provider store ={store}>
      <Content />
    </Provider>
  );
}

export default App;
