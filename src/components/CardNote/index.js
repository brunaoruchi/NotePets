import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import IconButton from '../IconButton';
import ImageRectangle from '../ImageRectangle';

export default class CardNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openCard: false,
    };
  }

  onPressIconArrowDown = () => {
    return this.setState({openCard: !this.state.openCard});
  };

  render() {
    const {note, onPressEdit, onPressDelete} = this.props;
    const Category = () => {
      switch (note.cattegory) {
        case '0':
          return 'Banho e Tosa';
        case '1':
          return 'Consulta Veterinária';
        case '2':
          return 'Vacinas';
        default:
          return 'Vermífugo';
      }
    };
    return (
      <>
        <View style={styles.container}>
          <View style={styles.containerLabel}>
            <Text style={styles.labelInfo}>
              <MaterialCommunityIcons
                name="calendar"
                size={24}
                color="#481610"
              />{' '}
              {note.date}
            </Text>
            <Text style={styles.labelInfo}>Categoria: {Category()}</Text>
            <Text style={styles.labelInfo}>
              Próxima data: {note.dateRemember}
            </Text>
            <Text
              style={styles.labelInfo}
              ellipsizeMode="tail"
              numberOfLines={2}>
              Observação: {note.observation}
            </Text>
          </View>
          <View style={styles.containerActions}>
            <IconButton
              labelIcon="pencil"
              color="#D76E33"
              onPress={onPressEdit}
            />
            <IconButton
              labelIcon="trash"
              color="#C80000"
              onPress={onPressDelete}
            />
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={this.onPressIconArrowDown}>
              <Icon name="angle-down" size={24} color="#481610" />
            </TouchableOpacity>
          </View>
        </View>
        {this.state.openCard && (
          <View style={styles.containerInfo}>
            {note.observation !== '' ? (
              <View style={styles.containerObservation}>
                <View style={styles.containerLabelObsevation}>
                  <Text style={styles.labelInfo}>
                    Observação: {note.observation}{' '}
                  </Text>
                </View>
                <View style={styles.containerActionsObsevation}>
                  <TouchableOpacity
                    style={{alignItems: 'center'}}
                    onPress={this.onPressIconArrowDown}>
                    <Icon name="angle-up" size={24} color="#481610" />
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
            {note.picture !== '' ? (
              <View style={styles.photo}>
                <ImageRectangle sourceImage={note.picture} />
              </View>
            ) : null}
          </View>
        )}
      </>
    );
  }
}
