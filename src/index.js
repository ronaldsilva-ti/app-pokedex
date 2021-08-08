import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import store from './store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
