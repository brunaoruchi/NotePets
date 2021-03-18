import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

Icon.loadFont();

export default class InputWithLabel extends Component {
  render() {
    const {title, navigation} = this.props;
    const titleHeader = ['Anotações', 'Pets'];

    return (
      <View style={styles.container}>
        <View style={styles.containerButton}>
          {titleHeader.some((item) => item === title) ? (
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Icon name="menu" size={32} color="#481610" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <Icon name="arrow-left" size={32} color="#481610" />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    );
  }
}
