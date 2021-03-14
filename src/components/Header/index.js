import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

export default function Header({title, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Icon
            name="menu"
            size={28}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FBC072',
  },
  text: {
    color: '#481610',
    fontSize: 30,
    fontFamily: 'DidactGothic-Regular',
    alignSelf: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 4,
    paddingRight: '25%',
  },
  containerTitle: {
    backgroundColor: '#FBC072',
    flex: 5,
  },
  containerButton: {
    justifyContent: 'center',
    backgroundColor: '#FBC072',
    paddingLeft: 10,
    flex: 1,
  },
});
