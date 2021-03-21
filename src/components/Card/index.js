import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import ImageCircle from '../ImageCircle';
import ImageRectangle from '../ImageRectangle';
import IconButton from '../IconButton';

import Icon from 'react-native-vector-icons/Fontisto';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openCard: false,
    };
  }

  onPressIconArrowDown = () => {
    if (this.state.openCard) {
      this.setState({openCard: false});
    } else {
      this.setState({openCard: true});
    }
  };

  render() {
    const {pet, onPress, onPressAddNote} = this.props;

    const CategoryIcon = () => {
      switch (pet.notesPet[lastNote].cattegory) {
        case '0': {
          return (
            <FontAwesome5
              style={styles.iconLabel}
              name="pump-soap"
              size={22}
              color="#481610"
            />
          );
        }
        case '1': {
          return (
            <MaterialCommunityIcons
              style={styles.iconLabel}
              name="medical-bag"
              size={24}
              color="#481610"
            />
          );
        }
        case '2': {
          return (
            <MaterialCommunityIcons
              style={styles.iconLabel}
              name="needle"
              size={24}
              color="#481610"
            />
          );
        }
        default: {
          return (
            <FontAwesome5
              style={styles.iconLabel}
              name="prescription-bottle-alt"
              size={20}
              color="#481610"
            />
          );
        }
      }
    };

    const lastNote = pet.notesPet.length - 1;
    const cattegory = [
      'Banho e Tosa',
      'Consulta Veterinária',
      'Vacinas',
      'Vermifugação',
    ];
    return (
      <>
        <View style={styles.container}>
          <View style={styles.containerPicture}>
            <ImageCircle sourceImage={pet.picture} />
          </View>
          <View style={styles.containerLabel}>
            <Text style={styles.labelName}>{pet.name}</Text>
            <Text style={styles.labelLastNote}>
              Última anotação: {pet.notesPet[lastNote].date} -{' '}
              {cattegory[pet.notesPet[lastNote].cattegory]} {CategoryIcon()}
            </Text>
          </View>
          <View style={styles.containerActions}>
            <IconButton
              labelIcon="sticker-plus"
              color="#D76E33"
              onPress={onPressAddNote}
            />
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={this.onPressIconArrowDown}>
              {this.state.openCard ? (
                <Icon name="angle-up" size={24} color="#481610" />
              ) : (
                <Icon name="angle-down" size={24} color="#481610" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        {this.state.openCard && (
          <View style={styles.containerInfo}>
            <View style={styles.line} />
            <Text style={styles.nextDate}>
              Próxima Data: {pet.notesPet[lastNote].dateRemember}
            </Text>
            {pet.notesPet[lastNote].observation !== '' ? (
              <Text style={styles.observation}>
                Observação: {pet.notesPet[lastNote].observation}{' '}
              </Text>
            ) : null}
            <View style={styles.photo}>
              <ImageRectangle sourceImage={pet.notesPet[lastNote].picture} />
            </View>
          </View>
        )}
      </>
    );
  }
}
