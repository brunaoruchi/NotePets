import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

Icon.loadFont();

export default class ButtonFooter extends Component {
  render() {
    const {text, icon} = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => {}}>
        <Icon name={icon} size={26} color="#992B25" />
        <Text style={styles.label}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
