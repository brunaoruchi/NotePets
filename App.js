import React, {Component} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import firebase from 'firebase';
import FlashMessage from 'react-native-flash-message';

import Routes from './src/routes';

export default class App extends Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyByo6a6pdcOMEbBJsfXbCpk6SNqiJgvwZU',
        authDomain: 'notepets-e7337.firebaseapp.com',
        projectId: 'notepets-e7337',
        storageBucket: 'notepets-e7337.appspot.com',
        messagingSenderId: '48898085054',
        appId: '1:48898085054:web:9941cd5a50ef5801c58eef',
        measurementId: 'G-0NZJVJPJ8F',
      });
    }
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor="#C7C5AB" barStyle="dark-content" />
        <SafeAreaView />
        <Routes />
        <FlashMessage position="bottom" />
      </>
    );
  }
}
