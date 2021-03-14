import * as React from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header';

import styles from './styles';

export default function Home({navigation}) {
  return (
    <>
      <Header title="Home" navigation={navigation} />
      <View style={styles.container}>
        <Text>Tela Home</Text>
      </View>
    </>
  );
}
