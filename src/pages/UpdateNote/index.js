import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputWithLabel from '../../components/InputWithLabel';
import ImageRectangle from '../../components/ImageRectangle';
import IconButton from '../../components/IconButton';
import Button from '../../components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import Header from '../../components/Header';

export default class UpdateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      date: new Date(),
      category1: false,
      category2: false,
      category3: false,
      category4: false,
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

  onPressCategory(category) {
    switch (category) {
      case '1':
        this.setState({category1: true});
        this.setState({category2: false});
        this.setState({category3: false});
        this.setState({category4: false});
        return;
      case '2':
        this.setState({category1: false});
        this.setState({category2: true});
        this.setState({category3: false});
        this.setState({category4: false});
        return;
      case '3':
        this.setState({category1: false});
        this.setState({category2: false});
        this.setState({category3: true});
        this.setState({category4: false});
        return;
      case '4':
        this.setState({category1: false});
        this.setState({category2: false});
        this.setState({category3: false});
        this.setState({category4: true});
        return;
    }
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
      <KeyboardAwareScrollView>
        <Header title="Editar anotação" navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.text}>Atualize a anotação do Rei!</Text>
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
          <View style={styles.containerCategory}>
            <Text style={styles.label}>Categoria</Text>
            <View style={styles.containerButtons}>
              <TouchableOpacity
                onPress={() => this.onPressCategory('1')}
                style={[
                  styles.button,
                  category1Style,
                  {borderTopLeftRadius: 10, borderBottomLeftRadius: 10},
                ]}>
                <FontAwesome5 name="pump-soap" size={21} color="#D76E33" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.onPressCategory('2')}
                style={[styles.button, category2Style]}>
                <MaterialCommunityIcons
                  name="medical-bag"
                  size={24}
                  color="#D76E33"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.onPressCategory('3')}
                style={[styles.button, category3Style]}>
                <MaterialCommunityIcons
                  name="needle"
                  size={28}
                  color="#D76E33"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.onPressCategory('4')}
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
