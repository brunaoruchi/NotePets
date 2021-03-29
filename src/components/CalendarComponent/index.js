import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default class CalendarContainer extends Component {
  render() {
    const {date, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.containerCalendar} onPress={onPress}>
        <View style={styles.containerIconCalendar}>
          <Icon size={26} color="#992B25" name="calendar" />
        </View>
        <Text style={styles.containerText}>
          {new Date(date).getDate()} / {new Date(date).getMonth() + 1} /{' '}
          {new Date(date).getFullYear()}
          {/* {date} */}
        </Text>
      </TouchableOpacity>
    );
  }
}
