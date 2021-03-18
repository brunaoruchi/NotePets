import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class Button extends Component {
  render() {
    const {label, onPress} = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
