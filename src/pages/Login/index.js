import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import firebase from 'firebase';
import {showMessage} from 'react-native-flash-message';
import styles from './styles';

import InputDefault from '../../components/InputDefault';
import ButtonFooter from '../../components/ButtonFooter';
import Button from '../../components/Button';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoading: false,
      message: '',
    };
  }

  processLogin() {
    this.setState({isLoading: true});
    const {email, password} = this.state;

    const loginUserSucess = (user) => {
      this.props.navigation.navigate('Menu');
      this.setState({email: '', password: '', message: ''});
    };

    const loginUserFailed = (error) => {
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
      .signInWithEmailAndPassword(email, password)
      .then(loginUserSucess)
      .catch((error) => {
        loginUserFailed(error);
      })
      .then(() => {
        this.setState({isLoading: false});
      });
  }

  getMessageByError(code) {
    switch (code) {
      case 'auth/user-not-found':
        return 'Usuário não cadastrado.';
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/invalid-email':
        return 'O endereço de e-mail não é válido.';
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
          <Text style={styles.loginLabel}>Faça seu login</Text>
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
          </View>
          <View style={styles.containerLabelForget}>
            <TouchableOpacity>
              <Text style={styles.loginLabelForget}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerButton}>
            <Button
              label="Entrar"
              flag={this.state.isLoading}
              onPress={() => this.processLogin()}
            />
          </View>
        </View>

        <ButtonFooter
          label="Criar uma conta"
          icon="login"
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}
        />
      </KeyboardAwareScrollView>
    );
  }
}
