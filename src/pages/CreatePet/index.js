import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header';

import styles from './styles';

import InputWithLabel from '../../components/InputWithLabel';
import Button from '../../components/Button';
import ImageCircle from '../../components/ImageCircle';
import IconButton from '../../components/IconButton';

export default class CreatePet extends Component {
  render() {
    return (
      <>
        <Header title="Adicionar pet" navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.text}>
            Insira todas as informações do seu pet!
          </Text>
          <ImageCircle />

          <View style={styles.camera}>
            <IconButton
              labelIcon="camera"
              color="#FFFFFF"
              onPress={() => console.log('hey')}
            />
          </View>

          <InputWithLabel label="Nome" placeholder="Nome" icon="bone" />
          <InputWithLabel label="Raça" placeholder="Raça" icon="paw" />
          <View style={styles.containerInputSmall}>
            <InputWithLabel
              label="Peso"
              placeholder="0,00"
              keyboardType="numeric"
              icon="weight-kilogram"
            />
          </View>

          <Button label="Salvar" />
        </View>
      </>
    );
  }
}
