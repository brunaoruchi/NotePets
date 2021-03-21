import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import CardPet from '../CardPet';

export default class CardsPet extends Component {
  render() {
    const {pets, onPressEdit, onPressDelete, onPressHistory} = this.props;

    return (
      <FlatList
        style={StyleSheet.container}
        data={pets}
        renderItem={({item}) => (
          <CardPet
            pet={item}
            onPressEdit={onPressEdit}
            onPressDelete={onPressDelete}
            onPressHistory={onPressHistory}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
}
