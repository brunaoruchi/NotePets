import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Input from '../InputDefault';

import styles from './styles';

export default class InputWithLabel extends Component {
  render() {
    const {label, placeholder, icon, keyboardType} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.text}>{label}</Text>
        </View>
        <Input
          placeholder={placeholder}
          icon={icon}
          keyboardType={keyboardType}
        />
      </View>
    );
  }
}
