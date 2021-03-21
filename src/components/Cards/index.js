import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Card from '../Card';

export default class Cards extends Component {
  render() {
    const {notes, onPress, onPressAddNote} = this.props;

    return (
      <FlatList
        style={StyleSheet.container}
        data={notes}
        renderItem={({item}) => (
          <Card pet={item} onPress={onPress} onPressAddNote={onPressAddNote} />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
}
