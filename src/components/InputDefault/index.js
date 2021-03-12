import React from 'react';
import {View, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

Icon.loadFont();

export default function InputDefault(props) {
  const {
    placeholder,
    keyboardType,
    icon,
    returnKeyType,
    secureTextEntry,
    eyeSecurity,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon style={styles.icon} name={icon} size={30} color="#992B25" />
      </View>
      <View
        style={
          eyeSecurity
            ? styles.containerInputEyeContainer
            : styles.containerInput
        }>
        <TextInput
          styles={styles.boxInput}
          keyboardType={keyboardType || 'default'}
          placeholder={placeholder}
          returnKeyType={returnKeyType || 'done'}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {eyeSecurity ? (
        <View style={styles.containerIconEye}>
          <TouchableOpacity onPress={() => {}}>
            <Icon style={styles.icon} name="eye" size={28} color="#481610" />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
