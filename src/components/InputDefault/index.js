import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

Icon.loadFont();

export default class InputDefault extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iconEye: true,
    };
  }

  onPressIconEye = () => {
    if (this.state.iconEye) {
      this.setState({iconEye: false});
    } else {
      this.setState({iconEye: true});
    }
  };

  render() {
    const {
      placeholder,
      keyboardType,
      icon,
      returnKeyType,
      secureTextEntry,
    } = this.props;

    const {iconEye} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          {icon === 'email' ? (
            <Zocial style={styles.icon} name={icon} size={30} color="#992B25" />
          ) : (
            <Icon style={styles.icon} name={icon} size={30} color="#992B25" />
          )}
        </View>
        <View
          style={
            secureTextEntry
              ? styles.containerInputEyeContainer
              : styles.containerInput
          }>
          <TextInput
            styles={styles.boxInput}
            keyboardType={keyboardType || 'default'}
            placeholder={placeholder}
            returnKeyType={returnKeyType || 'done'}
            secureTextEntry={secureTextEntry ? iconEye : false}
          />
        </View>
        {secureTextEntry ? (
          <TouchableOpacity
            style={styles.containerIconEye}
            onPress={this.onPressIconEye}>
            {iconEye ? (
              <MaterialCommunityIcons
                style={styles.icon}
                name="eye"
                size={28}
                color="#481610"
              />
            ) : (
              <MaterialCommunityIcons
                style={styles.icon}
                name="eye-off"
                size={28}
                color="#481610"
              />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}
