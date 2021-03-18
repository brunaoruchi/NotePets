import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

import InputDefault from '../../components/InputDefault';
import ButtonFooter from '../../components/ButtonFooter';
import Button from '../../components/Button';

export default function Register(props) {
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            source={require('../../assets/Icon.png')}
            style={styles.imageStyle}
          />
        </View>
        <Text style={styles.loginLabel}>Faça seu cadastro</Text>
        <View style={styles.containerInput}>
          <InputDefault placeholder="Nome Completo" icon="user-alt" />
          <InputDefault placeholder="E-mail" icon="email" />
          <InputDefault placeholder="Senha" icon="locked" secureTextEntry />
          <InputDefault
            placeholder="Confirmar a senha"
            icon="locked"
            secureTextEntry
          />
        </View>
        <View style={styles.containerButton}>
          <Button
            label="Cadastrar"
            onPress={() => {
              props.navigation.navigate('Menu');
            }}
          />
        </View>
      </View>
      <ButtonFooter
        label="Fazer login"
        icon="arrow-back"
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
    </KeyboardAwareScrollView>
  );
}
