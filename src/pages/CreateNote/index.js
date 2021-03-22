import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputWithLabel from '../../components/InputWithLabel';
import ImageRectangle from '../../components/ImageRectangle';
import IconButton from '../../components/IconButton';
import Button from '../../components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

import Header from '../../components/Header';

export default class CreateNote extends Component {
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
        <Header title="Nova anotação" navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.text}>Nova anotação do Rei!</Text>
          <View style={styles.containerInputSmallRow}>
            <View style={styles.containerInputSmallCalendar}>
              <InputWithLabel
                onPress={() => this.showMode()}
                label="Data"
                placeholder="      /       /     "
                icon="calendar"
              />
            </View>
            <View style={styles.containerInputSmallCalendar2}>
              <InputWithLabel
                onPress={() => this.showMode()}
                label="Próxima data"
                placeholder="      /       /     "
                icon="calendar"
              />
            </View>
          </View>
          <View style={styles.containerLabelCamera}>
            <Text style={styles.label}>Foto</Text>
            <View style={styles.cameraContainer}>
              <ImageRectangle />
              <View style={styles.camera}>
                <IconButton
                  labelIcon="camera"
                  color="#FFFFFF"
                  onPress={() => console.log('hey')}
                />
              </View>
            </View>
          </View>
          <View style={styles.containerObservation}>
            <Text style={styles.label}>Observação</Text>
            <TextInput
              style={styles.inputObservation}
              multiline
              placeholder="Digite as informações importantes..."
            />
          </View>

          <Button label="Salvar" />
          {this.state.show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={'date'}
              display="calendar"
              onChange={this.onChange}
            />
          )}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
