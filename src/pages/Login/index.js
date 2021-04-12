import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {showMessage} from 'react-native-flash-message';
import {connect} from 'react-redux';

import styles from './styles';

import InputDefault from '../../components/InputDefault';
import ButtonFooter from '../../components/ButtonFooter';
import Button from '../../components/Button';

import {processLogin} from '../../actions';

class Login extends Component {
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

    this.props
      .processLogin({email, password})
      .then((user) => {
        if (user) {
          this.props.navigation.replace('Menu');
        } else {
          this.setState({
            isLoading: false,
            message: '',
          });
        }
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          message: this.getMessageByError(error.code),
        });
        showMessage({
          message: this.state.message,
          duration: 4000,
          type: 'danger',
        });
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

export default connect(null, {processLogin})(Login);
