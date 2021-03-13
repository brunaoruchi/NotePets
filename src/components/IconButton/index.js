import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

FontAwesome.loadFont();
MaterialCommunityIcons.loadFont();

export default class IconButton extends Component {
  render() {
    const {labelIcon, color} = this.props;

    const iconsFontisto = ['angle-down', 'history', 'trash'];

    const iconsFontAwesome5 = ['pump-soap', 'prescription-bottle-alt'];

    return (
      <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {}}>
        {iconsFontisto.some((icon) => icon === labelIcon) ? (
          <Fontisto name={labelIcon} size={28} color={color} />
        ) : (
          <>
            {iconsFontAwesome5.some((icon) => icon === labelIcon) ? (
              <FontAwesome5 name={labelIcon} size={28} color={color} />
            ) : (
              <MaterialCommunityIcons
                name={labelIcon}
                size={32}
                color={color}
              />
            )}
          </>
        )}
      </TouchableOpacity>
    );
  }
}
