import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {showMessage} from 'react-native-flash-message';

import firebase from 'firebase';

import styles from './styles';

import InputDefault from '../../components/InputDefault';
import ButtonFooter from '../../components/ButtonFooter';
import Button from '../../components/Button';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  processLogin() {
    this.setState({isLoading: true});
    const {email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      this.setState({isLoading: false});
      return showMessage({
        message: 'As senhas devem ser iguais!',
        duration: 5000,
        type: 'danger',
      });
    }

    const createUserSucess = (user) => {
      this.props.navigation.navigate('Menu');
      this.setState({
        email: '',
        password: '',
        confirmPassword: '',
        message: '',
      });
    };

    const createUserFailed = (error) => {
      this.setState({
        message: this.getMessageByError(error.code),
      });
      showMessage({
        message: this.state.message,
        duration: 5000,
        type: 'danger',
      });
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(createUserSucess)
      .catch((error) => {
        createUserFailed(error);
      })
      .then(() => {
        this.setState({isLoading: false});
      });
  }

  getMessageByError(code) {
    switch (code) {
      case 'auth/user-not-found':
        return 'Usuário não cadastrado';
      case 'auth/weak-password':
        return 'A senha deve ter no mínimo 6 caracteres!';
      case 'auth/invalid-email':
        return 'O endereço de e-mail não é válido.';
      case 'auth/email-already-in-use':
        return 'Já existi uma conta com o endereço de email fornecido.';
      case 'auth/wrong-password':
        return 'Senha incorreta';
      default:
        return 'Erro desconhecido';
    }
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value,
    });
  }
  render() {
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
          <Text style={styles.loginLabel}>Faça seu cadastro</Text>
          <View style={styles.containerInput}>
            <InputDefault
              keyboardType="email-address"
              placeholder="E-mail"
              icon="email"
              value={this.state.email}
              onChangeText={(value) => {
                this.onChangeHandler('email', value);
              }}
            />
            <InputDefault
              placeholder="Senha"
              icon="locked"
              secureTextEntry
              value={this.state.password}
              onChangeText={(value) => {
                this.onChangeHandler('password', value);
              }}
            />
            <InputDefault
              placeholder="Confirmar a senha"
              icon="locked"
              secureTextEntry
              value={this.state.confirmPassword}
              onChangeText={(value) => {
                this.onChangeHandler('confirmPassword', value);
              }}
            />
          </View>
          <View style={styles.containerButton}>
            <Button
              label="Cadastrar"
              flag={this.state.isLoading}
              onPress={() => this.processLogin()}
            />
          </View>
        </View>
        <ButtonFooter
          label="Fazer login"
          icon="arrow-back"
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
        />
      </KeyboardAwareScrollView>
    );
  }
}
