import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

import Header from '../../components/Header';
import InputWithLabel from '../../components/InputWithLabel';
import Button from '../../components/Button';
import ImageCircle from '../../components/ImageCircle';
import IconButton from '../../components/IconButton';

export default class CreatePet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      date: new Date(),
    };
  }

  showMode = () => {
    this.setState({show: true});
  };

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.date;
    this.setState(currentDate);
    this.setState({show: false});
  };

  render() {
    return (
      <KeyboardAwareScrollView>
        <Header title="Adicionar pet" navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.text}>
            Insira todas as informações do seu pet!
          </Text>
          <View style={styles.cameraContainer}>
            <ImageCircle />

            <View style={styles.camera}>
              <IconButton
                labelIcon="camera"
                color="#FFFFFF"
                onPress={() => console.log('hey')}
              />
            </View>
          </View>

          <InputWithLabel label="Nome" placeholder="Nome" icon="bone" />
          <InputWithLabel label="Raça" placeholder="Raça" icon="paw" />
          <View style={styles.containerInputSmallRow}>
            <View style={styles.containerInputSmall}>
              <InputWithLabel
                label="Peso"
                placeholder="0,00"
                keyboardType="numeric"
                icon="weight-kilogram"
              />
            </View>
            <View style={styles.containerInputSmallCalendar}>
              <InputWithLabel
                onPress={() => this.showMode()}
                label="Data de Aniversário"
                placeholder="      /       /     "
                icon="calendar"
              />
            </View>
          </View>

          {this.state.show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={'date'}
              display="calendar"
              onChange={this.onChange}
            />
          )}
          <Button label="Salvar" />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
