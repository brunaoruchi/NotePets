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
import CalendarContainer from '../../components/CalendarComponent';

export default class CreatePet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      date: new Date(),
      pet: {
        name: '',
        breed: '',
        weight: '',
        dateBirthday: new Date().toLocaleDateString('pt-BR'),
      },
    };
  }

  showMode = () => {
    this.setState({show: true});
  };

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState(currentDate);
    this.setState({show: false});
    this.setState({
      pet: {
        ...this.state.pet,
        dateBirthday: currentDate.toLocaleDateString('pt-BR'),
      },
    });
  };

  onChangeHandler(field, value) {
    this.setState({
      pet: {...this.state.pet, [field]: value},
    });
  }
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
                onPress={() => console.log('camera')}
              />
            </View>
          </View>

          <InputWithLabel
            label="Nome"
            placeholder="Nome"
            icon="bone"
            value={this.state.pet.name}
            onChangeText={(value) => {
              this.onChangeHandler('name', value);
            }}
          />
          <InputWithLabel
            label="Raça"
            placeholder="Raça"
            icon="paw"
            value={this.state.pet.breed}
            onChangeText={(value) => {
              this.onChangeHandler('breed', value);
            }}
          />
          <View style={styles.containerInputSmallRow}>
            <View style={styles.containerInputSmall}>
              <InputWithLabel
                label="Peso"
                placeholder="0,00"
                keyboardType="numeric"
                icon="weight-kilogram"
                value={this.state.pet.weight}
                onChangeText={(value) => {
                  this.onChangeHandler('weight', value);
                }}
              />
            </View>
            <View style={styles.containerInputSmallCalendar}>
              <Text style={styles.label}>Data de Aniversário</Text>
              <CalendarContainer
                onPress={() => this.showMode()}
                date={this.state.pet.dateBirthday}
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
