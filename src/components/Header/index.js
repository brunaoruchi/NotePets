import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

Icon.loadFont();

export default function Header({title, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <TouchableOpacity>
          <Icon
            name="menu"
            size={32}
            color="#481610"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
}
