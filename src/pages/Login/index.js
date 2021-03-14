import * as React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

import Button from '../../components/Button';

export default function Login(props) {
  return (
    <View style={styles.container}>
      <Text>Tela Login</Text>
      <Button
        title="Entrar"
        onPress={() => {
          props.navigation.navigate('Menu');
        }}
      />
    </View>
  );
}
