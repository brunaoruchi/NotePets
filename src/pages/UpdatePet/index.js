import React, {Component} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RNCamera} from 'react-native-camera';

import {connect} from 'react-redux';
import {setField, savePet, setAllFields} from '../../actions';

import styles from './styles';

import Header from '../../components/Header';
import InputWithLabel from '../../components/InputWithLabel';
import Button from '../../components/Button';
import ImageCircle from '../../components/ImageCircle';
import IconButton from '../../components/IconButton';
import CalendarContainer from '../../components/CalendarComponent';

class UpdatePet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      isLoading: false,
      isCamera: false,
    };
  }

  showMode = () => {
    this.setState({show: true});
  };

  onChange = (event, selectedDate) => {
    const currentDate =
      selectedDate || new Date(this.props.petForm.dateBirthday);
    this.setState(currentDate);
    this.setState({show: false});
    this.props.setField(
      'dateBirthday',
      currentDate.toLocaleDateString('pt-BR'),
    );
  };

  componentDidMount() {
    const {setAllFields} = this.props;
    const pet = this.props.route.params.pet;
    setAllFields(pet);
  }

  onChangeHandler(field, value) {
    this.setState({
      pet: {...this.state.pet, [field]: value},
    });
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
        this.props.setField('picture', data.base64);

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
    const {petForm, setField, savePet} = this.props;

    return (
      <KeyboardAwareScrollView>
        <Header title="Alterar pet" navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.text}>Atualize as informações do seu pet!</Text>
          <View style={styles.cameraContainer}>
            <ImageCircle sourceImage={petForm.picture} />

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

          <InputWithLabel
            label="Nome"
            placeholder="Nome"
            icon="bone"
            value={petForm.name}
            onChangeText={(value) => setField('name', value)}
          />
          <InputWithLabel
            label="Raça"
            placeholder="Raça"
            icon="paw"
            value={petForm.breed}
            onChangeText={(value) => {
              setField('breed', value);
            }}
          />
          <View style={styles.containerInputSmallRow}>
            <View style={styles.containerInputSmall}>
              <InputWithLabel
                label="Peso"
                placeholder="0,00"
                keyboardType="numeric"
                icon="weight-kilogram"
                value={petForm.weight}
                onChangeText={(value) => {
                  setField('weight', value);
                }}
              />
            </View>
            <View style={styles.containerInputSmallCalendar}>
              <Text style={styles.label}>Data de Aniversário</Text>
              <CalendarContainer
                onPress={() => this.showMode()}
                date={petForm.dateBirthday}
              />
            </View>
          </View>

          {this.state.show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date(petForm.dateBirthday)}
              mode={'date'}
              display="calendar"
              onChange={this.onChange}
            />
          )}
          <Button
            label="Salvar"
            flag={this.state.isLoading}
            onPress={async () => {
              this.setState({isLoading: true});
              try {
                await savePet(petForm);
                this.setState({isLoading: false});
                this.props.navigation.goBack();
              } catch (error) {
                this.setState({isLoading: false});
                Alert.alert('Erro', error.message);
              }
            }}
          />
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
    petForm: state.petForm,
  };
};

const mapDispatchToProps = {
  setField,
  savePet,
  setAllFields,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePet);
