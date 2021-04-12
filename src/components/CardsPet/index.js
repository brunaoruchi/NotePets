import React, {Component} from 'react';
import {FlatList} from 'react-native';
import CardPet from '../CardPet';

export default class CardsPet extends Component {
  render() {
    const {
      pets,
      onPressEdit,
      onPressDelete,
      onPressHistory,
      onPressCreate,
    } = this.props;

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={pets}
        renderItem={({item}) => (
          <CardPet
            pet={item}
            onPressEdit={onPressEdit}
            onPressDelete={onPressDelete}
            onPressHistory={onPressHistory}
            onPressCreate={onPressCreate}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
}
