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
    return this.setState({openCard: !this.state.openCard});
  };

  render() {
    const {pet, onPressAddNote} = this.props;

    const CategoryIcon = (icon) => {
      switch (icon) {
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
    const category = [
      'Banho e Tosa',
      'Consulta Veterinária',
      'Vacinas',
      'Vermífugo',
    ];
    let notes, date, dateRemember, lastNote;

    if (pet.notes) {
      lastNote = Object.keys(pet.notes).length - 1;

      const keys = Object.keys(this.props.pet.notes);
      notes = keys.map((key) => {
        return {...this.props.pet.notes[key], id: key};
      });

      date = notes[lastNote].date;
      dateRemember = notes[lastNote].dateRemember;
    }
    return (
      <>
        {pet.notes && (
          <View style={styles.container}>
            <View style={styles.containerPicture}>
              <ImageCircle sourceImage={pet.picture} />
            </View>
            <View style={styles.containerLabel}>
              <Text style={styles.labelName}>{pet.name}</Text>
              <Text style={styles.labelLastNote}>
                Última anotação: {new Date(date).getDate()}/
                {new Date(date).getMonth() + 1}/{new Date(date).getFullYear()} -{' '}
                {category[notes[lastNote].category]}{' '}
                {CategoryIcon(notes[lastNote].category)}
              </Text>
            </View>
            <View style={styles.containerActions}>
              <IconButton
                labelIcon="sticker-plus"
                color="#D76E33"
                onPress={() => onPressAddNote({pet})}
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
        )}
        <>
          {this.state.openCard && pet.notes && (
            <View style={styles.containerInfo}>
              <View style={styles.line} />
              <Text style={styles.nextDate}>
                Próxima Data: {new Date(dateRemember).getDate()}/
                {new Date(dateRemember).getMonth() + 1}/
                {new Date(dateRemember).getFullYear()}
              </Text>
              {notes[lastNote].observation !== '' ? (
                <Text style={styles.observation}>
                  Observação: {notes[lastNote].observation}{' '}
                </Text>
              ) : null}
              {notes[lastNote].picture !== '' ? (
                <View style={styles.photo}>
                  <ImageRectangle sourceImage={notes[lastNote].picture} />
                </View>
              ) : null}
            </View>
          )}
        </>
      </>
    );
  }
}
