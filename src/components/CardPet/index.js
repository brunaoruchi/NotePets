import React, {Component} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

import ImageCircle from '../ImageCircle';
import IconButton from '../IconButton';

export default class CardPet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openCard: false,
    };
  }

  render() {
    const {pet, onPressEdit, onPressHistory, onPressDelete} = this.props;

    const Idade = () => {
      var today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth() + 1,
        day = today.getDate(),
        yearBirthday = 1996,
        monthBirthday = 8,
        dayBirthday = 11,
        age = year - yearBirthday;

      if (
        month < monthBirthday ||
        (month === monthBirthday && day < dayBirthday)
      ) {
        age--;
      }

      return age < 0 ? 0 : age;
    };

    const dateBirthday = pet.dateBirthday;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.containerPicture}>
            <ImageCircle sourceImage={pet.picture} />
          </View>
          <View style={styles.containerLabel}>
            <Text style={styles.labelName}>{pet.name}</Text>
            <View style={styles.labelInfoContainer}>
              <Text style={styles.labelInfo}>Idade: {Idade()} anos</Text>
              <Text
                style={styles.labelInfo}
                ellipsizeMode="tail"
                numberOfLines={1}>
                Raça: {pet.breed}
              </Text>
              <Text style={styles.labelInfo}>Peso: {pet.weight} Kg</Text>
              <Text style={styles.labelInfo}>
                Niver: {new Date(dateBirthday).getDate()}/
                {new Date(dateBirthday).getMonth() + 1}/
                {new Date(dateBirthday).getFullYear()}
              </Text>
            </View>
          </View>
          <View style={styles.containerActions}>
            <IconButton
              labelIcon="pencil"
              color="#D76E33"
              onPress={() => onPressEdit({pet})}
            />
            <IconButton
              labelIcon="trash"
              color="#C80000"
              onPress={onPressDelete}
            />
            <IconButton
              labelIcon="history"
              color="#481610"
              onPress={() => onPressHistory({pet})}
            />
          </View>
        </View>
      </>
    );
  }
}
