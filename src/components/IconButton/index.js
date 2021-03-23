import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

FontAwesome.loadFont();
MaterialCommunityIcons.loadFont();

export default class IconButton extends Component {
  render() {
    const {labelIcon, color, onPress} = this.props;

    const iconsFontisto = ['history', 'trash'];

    return (
      <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
        {iconsFontisto.some((icon) => icon === labelIcon) ? (
          <Fontisto name={labelIcon} size={28} color={color} />
        ) : (
          <MaterialCommunityIcons name={labelIcon} size={32} color={color} />
        )}
      </TouchableOpacity>
    );
  }
}
