import React, {Component} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
    };
  }

  render() {
    const {label, onPress, flag} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {flag ? (
          <ActivityIndicator color="#FFFFFF" size={30} />
        ) : (
          <Text style={styles.label}>{label}</Text>
        )}
      </TouchableOpacity>
    );
  }
}
