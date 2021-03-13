import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#C7C5AB" barStyle="dark-content" />
      <SafeAreaView />
      <Routes />
    </>
  );
}
