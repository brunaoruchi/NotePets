import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';

import Header from '../../components/Header';
import InputWithLabel from '../../components/InputWithLabel';
import Button from '../../components/Button';
import ImageCircle from '../../components/ImageCircle';
import CalendarComponent from '../../components/CalendarComponent';
import IconButton from '../../components/IconButton';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class UpdatePet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      date: new Date(),
      pet: {
        name: '',
        picture: '',
        breed: '',
        weight: '',
        dateBirthday: '',
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

  async componentDidMount() {
    await this.setState({
      pet: {
        ...this.props.route.params.pet,
      },
    });
  }

  onChangeHandler(field, value) {
    this.setState({
      pet: {...this.state.pet, [field]: value},
    });
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <Header title="Alterar pet" navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.text}>Atualize as informações do seu pet!</Text>
          <View style={styles.cameraContainer}>
            <ImageCircle sourceImage={this.state.pet.picture} />

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
              <CalendarComponent
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
