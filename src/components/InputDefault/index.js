import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Zocial from 'react-native-vector-icons/Zocial';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
      onPress,
    } = this.props;

    const {iconEye} = this.state;
    const iconsFontAwesome5 = ['bone', 'user-alt'];
    return (
      <>
        {icon === 'weight-kilogram' ? (
          <View style={styles.containerSmall}>
            <View style={styles.containerIconSmall}>
              <MaterialCommunityIcons
                style={styles.icon}
                name={icon}
                size={28}
                color="#992B25"
              />
            </View>
            <View style={styles.containerInputSmall}>
              <TextInput
                styles={styles.boxInputSmall}
                keyboardType={keyboardType || 'default'}
                placeholder={placeholder}
                returnKeyType={returnKeyType || 'done'}
              />
            </View>
            <Text style={styles.textInputSmall}>Kg</Text>
          </View>
        ) : (
          <>
            {icon === 'calendar' ? (
              <TouchableOpacity onPress={onPress}>
                <View style={styles.containerSmallCalendar}>
                  <View style={styles.containerIconSmallCalendar}>
                    <MaterialCommunityIcons
                      style={styles.icon}
                      name={icon}
                      size={28}
                      color="#992B25"
                    />
                  </View>
                  <View style={styles.containerInputSmall}>
                    <TextInput
                      styles={styles.boxInputSmall}
                      placeholder={placeholder}
                      editable={false}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
              <View style={styles.container}>
                <View style={styles.containerIcon}>
                  {icon === 'email' ? (
                    <Zocial
                      style={styles.icon}
                      name={icon}
                      size={25}
                      color="#992B25"
                    />
                  ) : (
                    <>
                      {iconsFontAwesome5.some((item) => item === icon) ? (
                        <FontAwesome5
                          style={styles.icon}
                          name={icon}
                          size={25}
                          color="#992B25"
                        />
                      ) : (
                        <Icon
                          style={styles.icon}
                          name={icon}
                          size={25}
                          color="#992B25"
                        />
                      )}
                    </>
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
            )}
          </>
        )}
      </>
    );
  }
}
