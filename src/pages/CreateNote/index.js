import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImageRectangle from '../../components/ImageRectangle';
import IconButton from '../../components/IconButton';
import Button from '../../components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import Header from '../../components/Header';
import CalendarComponent from '../../components/CalendarComponent';

export default class CreateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      showRemember: false,
      category1: false,
      category2: false,
      category3: false,
      category4: false,
      date: new Date(),
      note: {
        date: new Date().toLocaleDateString('pt-BR'),
        dateRemember: new Date().toLocaleDateString('pt-BR'),
        category: '',
        picture: '',
        observation: '',
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
      note: {
        ...this.state.note,
        date: currentDate.toLocaleDateString('pt-BR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
      },
    });
  };

  showModeDateRemember = () => {
    this.setState({showRemember: true});
  };

  onChangeDateRemember = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState(currentDate);
    this.setState({showRemember: false});
    this.setState({
      note: {
        ...this.state.note,
        dateRemember: currentDate.toLocaleDateString('pt-BR'),
      },
    });
  };

  onPressCategory(choice) {
    switch (choice) {
      case '0':
        this.setState({note: {...this.state.note, category: choice}});
        this.setState({category1: true});
        this.setState({category2: false});
        this.setState({category3: false});
        this.setState({category4: false});
        return;
      case '1':
        this.setState({note: {...this.state.note, category: choice}});
        this.setState({category1: false});
        this.setState({category2: true});
        this.setState({category3: false});
        this.setState({category4: false});
        return;
      case '2':
        this.setState({note: {...this.state.note, category: choice}});
        this.setState({category1: false});
        this.setState({category2: false});
        this.setState({category3: true});
        this.setState({category4: false});
        return;
      default:
        this.setState({note: {...this.state.note, category: choice}});
        this.setState({category1: false});
        this.setState({category2: false});
        this.setState({category3: false});
        this.setState({category4: true});
        return;
    }
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value,
    });
  }
  render() {
    const {category1, category2, category3, category4} = this.state;

    const category1Style = {
      backgroundColor: category1 ? '#FBC072' : '#FFFFFF',
    };

    const category2Style = {
      backgroundColor: category2 ? '#FBC072' : '#FFFFFF',
    };

    const category3Style = {
      backgroundColor: category3 ? '#FBC072' : '#FFFFFF',
    };

    const category4Style = {
      backgroundColor: category4 ? '#FBC072' : '#FFFFFF',
    };

    return (
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Header title="Nova anotação" navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.text}>
            Nova anotação: {this.props.route.params.namePet}
          </Text>

          <View style={styles.containerInputSmallRow}>
            <View style={styles.containerInputSmallCalendar}>
              <Text style={styles.label}>Data</Text>
              <CalendarComponent
                date={this.state.note.date}
                onPress={() => this.showMode()}
              />
            </View>
            <View style={styles.containerInputSmallCalendar2}>
              <Text style={styles.label}>Próxima data</Text>
              <CalendarComponent
                date={this.state.note.dateRemember}
                onPress={() => this.showModeDateRemember()}
              />
            </View>
          </View>
          <View style={styles.containerCategory}>
            <Text style={styles.label}>Categoria</Text>
            <View style={styles.containerButtons}>
              <TouchableOpacity
                onPress={() => this.onPressCategory('0')}
                style={[
                  styles.button,
                  category1Style,
                  {borderTopLeftRadius: 10, borderBottomLeftRadius: 10},
                ]}>
                <FontAwesome5 name="pump-soap" size={21} color="#D76E33" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.onPressCategory('1')}
                style={[styles.button, category2Style]}>
                <MaterialCommunityIcons
                  name="medical-bag"
                  size={24}
                  color="#D76E33"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.onPressCategory('2')}
                style={[styles.button, category3Style]}>
                <MaterialCommunityIcons
                  name="needle"
                  size={28}
                  color="#D76E33"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.onPressCategory('3')}
                style={[
                  styles.button,
                  category4Style,
                  {
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderRightWidth: 2,
                  },
                ]}>
                <FontAwesome5
                  name="prescription-bottle-alt"
                  size={21}
                  color="#D76E33"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.containerFooter}>
              <View style={styles.containerFooterLineTop}>
                <Text style={styles.labelCategory}>
                  {' '}
                  <FontAwesome5
                    name="pump-soap"
                    size={21}
                    color="#D76E33"
                  />{' '}
                  Banho e Tosa
                </Text>

                <Text style={styles.labelCategory}>
                  <MaterialCommunityIcons
                    name="needle"
                    size={24}
                    color="#D76E33"
                  />
                  Vacinas
                </Text>
              </View>
              <View style={styles.containerFooterLineBottom}>
                <Text style={styles.labelCategory}>
                  <MaterialCommunityIcons
                    name="medical-bag"
                    size={24}
                    color="#D76E33"
                  />
                  Consulta Veterinária
                </Text>

                <Text style={styles.labelCategory}>
                  {' '}
                  <FontAwesome5
                    name="prescription-bottle-alt"
                    size={21}
                    color="#D76E33"
                  />{' '}
                  Vermífugo
                </Text>
              </View>
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
                  onPress={() => console.log('camera')}
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
              value={this.state.note.observation}
              onChangeText={(value) => {
                this.onChangeHandler('observation', value);
              }}
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
          {this.state.showRemember && (
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={'date'}
              display="calendar"
              onChange={this.onChangeDateRemember}
            />
          )}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
