import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

Icon.loadFont();

export default class ButtonFooter extends Component {
  render() {
    const {label, icon} = this.props;

    return (
      <>
        <View style={styles.line} />
        <TouchableOpacity style={styles.container} onPress={() => {}}>
          <Icon name={icon} size={26} color="#992B25" />
          <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
      </>
    );
  }
}
