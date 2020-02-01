import React from 'react';
import Header from './components/Header/Header'
import MainContainer from "./components/MainContainer/MainContainer";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import Reducers from './store/Reducers';

const store = createStore(Reducers);

function App() {
  return (
    <Provider store={store}>
        <div style={{ margin: -8}}>
          <Header />
          <MainContainer />
        </div>
    </Provider>
  );
}

export default App;
