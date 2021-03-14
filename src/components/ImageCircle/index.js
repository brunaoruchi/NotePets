import React, {Component} from 'react';
import {View, Image} from 'react-native';

import styles from './styles';

export default class ImageCircle extends Component {
  render() {
    const {sourceImage} = this.props;

    return (
      <View style={styles.container}>
        <Image source={sourceImage} style={styles.containerImage} />
      </View>
    );
  }
}
