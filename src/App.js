import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './reducers';
import { Header } from './components/common';


const App = () => {

  return (
    <Provider store={ createStore(combineReducers) }>
      <View>
       <Header headerText="Tech Stack" />
      </View>
    </Provider>
  );
};

export default App;
