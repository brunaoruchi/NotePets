import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles';

export default class ImageCircle extends Component {
  render() {
    const {sourceImage} = this.props;

    return (
      <View style={styles.container}>
        {sourceImage ? (
          <Image source={{uri: sourceImage}} style={styles.containerImage} />
        ) : (
          <View style={styles.containerIcon}>
            <Icon name="paw" size={30} color={'#FDE5C5'} />
          </View>
        )}
      </View>
    );
  }
}
