import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <Routes />
    </>
  );
}
