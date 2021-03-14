import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import ImageCircle from '../ImageCircle';
import IconButton from '../IconButton';
import Icon from 'react-native-vector-icons/Fontisto';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openCard: false,
    };
  }

  onPressIconArrowDown = () => {
    if (this.state.openCard) {
      this.setState({openCard: false});
    } else {
      this.setState({openCard: true});
    }
  };

  render() {
    const {name, dateNote, category} = this.props;

    const CategoryIcon = () => {
      switch (category) {
        case 'Banho e Tosa': {
          return (
            <FontAwesome5
              style={styles.iconLabel}
              name="pump-soap"
              size={20}
              color="#481610"
            />
          );
        }
        case 'Consulta Veterinária': {
          return (
            <MaterialCommunityIcons
              style={styles.iconLabel}
              name="medical-bag"
              size={23}
              color="#481610"
            />
          );
        }
        case 'Vacina': {
          return (
            <MaterialCommunityIcons
              style={styles.iconLabel}
              name="needle"
              size={24}
              color="#481610"
            />
          );
        }
        default: {
          return (
            <FontAwesome5
              style={styles.iconLabel}
              name="prescription-bottle-alt"
              size={18}
              color="#481610"
            />
          );
        }
      }
    };
    return (
      <>
        <View style={styles.container}>
          <View style={styles.containerPicture}>
            <ImageCircle sourceImage={require('../../assets/cat.jpg')} />
          </View>
          <View style={styles.containerLabel}>
            <Text style={styles.labelName}>{name}</Text>
            <Text style={styles.labelLastNote}>
              Última anotação: {dateNote} - {category} {CategoryIcon()}
            </Text>
          </View>
          <View style={styles.containerActions}>
            <IconButton labelIcon="sticker-plus" color="#D76E33" />
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={this.onPressIconArrowDown}>
              {this.state.openCard ? (
                <Icon name="angle-up" size={24} color="#481610" />
              ) : (
                <Icon name="angle-down" size={24} color="#481610" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        {this.state.openCard && (
          <View style={styles.containerInfo}>
            <View style={styles.line} />
            <Text style={styles.nextDate}>Próxima Data: 12/03/2021</Text>
            <Text style={styles.observation}>
              Observação: Deve ser aplicado a medicação 1 no período de 12 em 12
              horas. Fazer a limpeza da região durante uma semana.
            </Text>
            <View style={styles.photo} />
          </View>
        )}
      </>
    );
  }
}
