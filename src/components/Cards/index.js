import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Card from '../Card';

export default class Cards extends Component {
  render() {
    const {notes, onPress} = this.props;

    return (
      <FlatList
        style={StyleSheet.container}
        data={notes}
        renderItem={({item}) => <Card pet={item} onPress={onPress} />}
        keyExtractor={(item) => item.id}
      />
    );
  }
}
