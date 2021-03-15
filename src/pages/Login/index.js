import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

import InputDefault from '../../components/InputDefault';
import ButtonFooter from '../../components/ButtonFooter';
import Button from '../../components/Button';

export default function Login(props) {
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            source={require('../../assets/Icon.png')}
            style={styles.imageStyle}
          />
          <Image
            source={require('../../assets/NotePets.png')}
            style={styles.imageStyleLabel}
          />
        </View>
        <Text style={styles.loginLabel}>Faça seu login</Text>
        <View style={styles.containerInput}>
          <InputDefault placeholder="E-mail" icon="email" />
          <InputDefault placeholder="Senha" icon="locked" secureTextEntry />
        </View>
        <View style={styles.containerLabelForget}>
          <TouchableOpacity>
            <Text style={styles.loginLabelForget}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerButton}>
          <Button
            title="Entrar"
            onPress={() => {
              props.navigation.navigate('Menu');
            }}
          />
        </View>
      </View>
      <ButtonFooter label="Criar uma conta" icon="login" />
    </KeyboardAwareScrollView>
  );
}
