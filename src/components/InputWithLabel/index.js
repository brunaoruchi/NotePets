import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Input from '../InputDefault';

import styles from './styles';

export default class InputWithLabel extends Component {
  render() {
    const {
      label,
      placeholder,
      icon,
      keyboardType,
      onPress,
      ...props
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.text}>{label}</Text>
        </View>
        <Input
          {...props}
          placeholder={placeholder}
          icon={icon}
          keyboardType={keyboardType}
          onPress={onPress}
        />
      </View>
    );
  }
}
