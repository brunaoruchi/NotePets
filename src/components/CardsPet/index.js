import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import CardPet from '../CardPet';

export default class CardsPet extends Component {
  render() {
    const {pets, onPress} = this.props;

    return (
      <FlatList
        style={StyleSheet.container}
        data={pets}
        renderItem={({item}) => <CardPet pet={item} onPress={onPress} />}
        keyExtractor={(item) => item.id}
      />
    );
  }
}
