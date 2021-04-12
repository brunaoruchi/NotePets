import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import styles from './styles';

import ImageCircle from '../ImageCircle';
import IconButton from '../IconButton';

export default class CardPet extends Component {
  render() {
    const {
      pet,
      onPressEdit,
      onPressHistory,
      onPressDelete,
      onPressCreate,
    } = this.props;

    const Idade = () => {
      var today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth() + 1,
        day = today.getDate(),
        yearBirthday = new Date(pet.dateBirthday).getFullYear(),
        monthBirthday = new Date(pet.dateBirthday).getMonth() + 1,
        dayBirthday = new Date(pet.dateBirthday).getDate(),
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
              <Text style={[styles.labelInfo, {paddingBottom: 1}]}>
                <Image source={require('../../assets/cake.png')} />{' '}
                {new Date(dateBirthday).getDate()}/
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
              onPress={() => onPressDelete({pet})}
            />
            {pet.notes === undefined ? (
              <IconButton
                labelIcon="sticker-plus"
                color="#481610"
                onPress={() => onPressCreate({pet})}
              />
            ) : (
              <IconButton
                labelIcon="history"
                color="#481610"
                onPress={() => onPressHistory({pet})}
              />
            )}
          </View>
        </View>
      </>
    );
  }
}
