import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {RNCamera} from 'react-native-camera';
import ImageRectangle from '../../components/ImageRectangle';
import IconButton from '../../components/IconButton';
import Button from '../../components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import Header from '../../components/Header';
import CalendarComponent from '../../components/CalendarComponent';

import {connect} from 'react-redux';
import {setFieldNote, saveNote, setAllFieldsNote} from '../../actions';

class UpdateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      showRemember: false,
      category1: false,
      category2: false,
      category3: false,
      category4: false,
      isLoading: false,
      isCamera: false,
    };
  }

  showMode = () => {
    this.setState({show: true});
  };

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date(this.props.noteForm.date);
    this.setState(currentDate);
    this.setState({show: false});
    this.props.setFieldNote('date', currentDate.toLocaleDateString('pt-BR'));
  };

  showModeDateRemember = () => {
    this.setState({showRemember: true});
  };

  onChangeDateRemember = (event, selectedDate) => {
    const currentDate =
      selectedDate || new Date(this.props.noteForm.dateRemember);
    this.setState(currentDate);
    this.setState({showRemember: false});
    this.props.setFieldNote(
      'dateRemember',
      currentDate.toLocaleDateString('pt-BR'),
    );
  };

  onPressCategory(choice) {
    switch (choice) {
      case '0':
        this.props.setFieldNote('category', choice);
        this.setState({category1: true});
        this.setState({category2: false});
        this.setState({category3: false});
        this.setState({category4: false});
        return;
      case '1':
        this.props.setFieldNote('category', choice);
        this.setState({category1: false});
        this.setState({category2: true});
        this.setState({category3: false});
        this.setState({category4: false});
        return;
      case '2':
        this.props.setFieldNote('category', choice);
        this.setState({category1: false});
        this.setState({category2: false});
        this.setState({category3: true});
        this.setState({category4: false});
        return;
      default:
        this.props.setFieldNote('category', choice);
        this.setState({category1: false});
        this.setState({category2: false});
        this.setState({category3: false});
        this.setState({category4: true});
        return;
    }
  }

  async componentDidMount() {
    const {setAllFieldsNote} = this.props;
    const note = this.props.route.params.note;
    await setAllFieldsNote(note);
    this.onPressCategory(this.props.noteForm.category);
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {
        quality: 0.5,
        base64: true,
        forceUpOrientation: true,
        fixOrientation: true,
      };
      const data = await this.camera.takePictureAsync(options);

      if (data) {
        this.props.setFieldNote('picture', data.base64);

        this.setState({
          isCamera: false,
        });
      }
    }
  };

  viewCamera() {
    return (
      <View style={styles.containerCamera}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'Nós precisamos de sua permissão para usar a câmera',
            buttonPositive: 'Aceito',
            buttonNegative: 'Cancelar',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to record audio',
            message: 'Nós precisamos de sua permissão para gravar áudio',
            buttonPositive: 'Aceito',
            buttonNegative: 'Cancelar',
          }}
        />
        <View>
          <TouchableOpacity
            style={styles.capture}
            onPress={this.takePicture.bind(this)}>
            <Text>Tirar foto!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  viewForm() {
    const {noteForm, setFieldNote, saveNote} = this.props;

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
        <Header title="Editar anotação" navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.text}>
            Atualize a anotação do {this.props.route.params.name}!
          </Text>
          <View style={styles.containerInputSmallRow}>
            <View style={styles.containerInputSmallCalendar}>
              <Text style={styles.label}>Data</Text>
              <CalendarComponent
                date={noteForm.date}
                onPress={() => this.showMode()}
              />
            </View>
            <View style={styles.containerInputSmallCalendar2}>
              <Text style={styles.label}>Próxima data</Text>
              <CalendarComponent
                date={noteForm.dateRemember}
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
              <ImageRectangle sourceImage={noteForm.picture} />
              <View style={styles.camera}>
                <IconButton
                  labelIcon="camera"
                  color="#FFFFFF"
                  onPress={() => {
                    this.setState({
                      isCamera: true,
                    });
                  }}
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
              value={noteForm.observation}
              onChangeText={(value) => setFieldNote('observation', value)}
            />
          </View>

          <Button
            label="Salvar"
            flag={this.state.isLoading}
            onPress={async () => {
              this.setState({isLoading: true});
              try {
                await saveNote(this.props.route.params.id, noteForm);
                this.setState({isLoading: false});
                this.props.navigation.pop();
              } catch (error) {
                this.setState({isLoading: false});
                Alert.alert('Erro', error.message);
              }
            }}
          />
          {this.state.show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date(noteForm.date)}
              mode={'date'}
              display="calendar"
              onChange={this.onChange}
            />
          )}
          {this.state.showRemember && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date(noteForm.dateRemember)}
              mode={'date'}
              display="calendar"
              onChange={this.onChangeDateRemember}
            />
          )}
        </View>
      </KeyboardAwareScrollView>
    );
  }

  render() {
    if (this.state.isCamera) {
      return this.viewCamera();
    }

    return this.viewForm();
  }
}
const mapStateToProps = (state) => {
  return {
    noteForm: state.noteForm,
  };
};

const mapDispatchToProps = {
  setFieldNote,
  saveNote,
  setAllFieldsNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateNote);
