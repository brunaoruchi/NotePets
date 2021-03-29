import React, {Component} from 'react';
import {FlatList} from 'react-native';
import CardNote from '../CardNote';

export default class CardsNote extends Component {
  render() {
    const {notes, onPressDelete, onPressEdit, name} = this.props;

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={notes}
        renderItem={({item}) => (
          <CardNote
            note={item}
            name={name}
            onPressDelete={onPressDelete}
            onPressEdit={onPressEdit}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
}
