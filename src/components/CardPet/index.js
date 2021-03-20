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

    return (
      <>
        <View style={styles.container}>
          <View style={styles.containerPicture}>
            <ImageCircle sourceImage={pet.picture} />
          </View>
          <View style={styles.containerLabel}>
            <Text style={styles.labelName}>{pet.name}</Text>
            <View style={styles.labelInfoContainer}>
              <Text style={styles.labelInfo}>Idade: {pet.dateBirthday}</Text>
              <Text style={styles.labelInfo}>Raça: {pet.breed}</Text>
              <Text style={styles.labelInfo}>Peso: {pet.weight} Kg</Text>
              <Text style={styles.labelInfo}>Niver: {pet.dateBirthday}</Text>
            </View>
          </View>
          <View style={styles.containerActions}>
            <IconButton
              labelIcon="pencil"
              color="#D76E33"
              onPress={onPressEdit}
            />
            <IconButton
              labelIcon="trash"
              color="#C80000"
              onPress={onPressDelete}
            />
            <IconButton
              labelIcon="history"
              color="#481610"
              onPress={onPressHistory}
            />
          </View>
        </View>
      </>
    );
  }
}
