import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ImageCircle from '../../components/ImageCircle';
import CardsNote from '../../components/CardsNote';

import Header from '../../components/Header';

import styles from './styles';

export default class History extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header title="Histórico" navigation={this.props.navigation} />
        <View style={styles.container}>
          <View style={styles.containerInfo}>
            <View style={styles.containerImage}>
              <ImageCircle sourceImage={this.props.route.params.pet.picture} />
            </View>
            <Text style={styles.text}>
              Todas as anotações do {this.props.route.params.pet.name}!
            </Text>
          </View>
          <CardsNote
            notes={this.props.route.params.pet.notes}
            name={this.props.route.params.pet.name}
            onPressEdit={(parameters) =>
              this.props.navigation.navigate('UpdateNote', parameters)
            }
          />
        </View>
      </>
    );
  }
}
