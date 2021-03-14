import * as React from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header';

import styles from './styles';

export default function Pets({navigation}) {
  return (
    <>
      <Header title="Pets" navigation={navigation} />
      <View style={styles.container}>
        <Text>Tela Pets</Text>
      </View>
    </>
  );
}
