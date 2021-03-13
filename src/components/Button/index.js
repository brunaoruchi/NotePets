import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class Button extends Component {
  render() {
    const {text} = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => {}}>
        <Text style={styles.label}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
