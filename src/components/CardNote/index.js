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
      containerSize: true,
      containerImageInfo: true,
      arrowUp: true,
    };
  }

  componentDidMount() {
    if (this.props.note.picture === '' && this.props.note.observation === '') {
      this.setState({containerSize: false});
    }
    if (this.props.note.picture !== '' && this.props.note.observation === '') {
      this.setState({containerImageInfo: false});
      this.setState({arrowUp: false});
    }
  }

  onPressIconArrowDown = () => {
    return this.setState({openCard: !this.state.openCard});
  };

  render() {
    const {note, id, name, onPressEdit, onPressDelete} = this.props;
    const {containerSize, containerImageInfo, arrowUp} = this.state;

    const containerInfoImage = {
      top: containerImageInfo ? -57 : -30,
      marginBottom: containerImageInfo ? -40 : -10,
    };

    const heightContainer = {
      height: containerSize ? 150 : 100,
    };

    const arrowUpContainer = {
      top: arrowUp ? 0 : -2,
    };

    const Category = () => {
      switch (note.category) {
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
    const date = note.date;
    const dateRemember = note.dateRemember;
    return (
      <>
        <View style={[styles.container, heightContainer]}>
          <View style={styles.containerLabel}>
            <Text style={styles.labelInfo}>
              <MaterialCommunityIcons
                name="calendar"
                size={24}
                color="#481610"
              />{' '}
              {new Date(date).getDate()}/{new Date(date).getMonth() + 1}/
              {new Date(date).getFullYear()}
            </Text>
            <Text style={styles.labelInfo}>Categoria: {Category()} </Text>
            <Text style={styles.labelInfo}>
              Próxima data: {new Date(dateRemember).getDate()}/
              {new Date(dateRemember).getMonth() + 1}/
              {new Date(dateRemember).getFullYear()}
            </Text>
            {note.observation !== '' ? (
              <Text
                style={styles.labelInfo}
                ellipsizeMode="tail"
                numberOfLines={2}>
                Observação: {note.observation}
              </Text>
            ) : null}
          </View>
          <View style={styles.containerActions}>
            <IconButton
              labelIcon="pencil"
              color="#D76E33"
              onPress={() => onPressEdit({note, name, id})}
            />
            <IconButton
              labelIcon="trash"
              color="#C80000"
              onPress={() => onPressDelete({id, note})}
            />
            {note.observation === '' ? (
              <>
                {note.picture === '' ? null : (
                  <>
                    {this.state.openCard ? (
                      <TouchableOpacity
                        style={[{alignItems: 'center'}, arrowUpContainer]}
                        onPress={this.onPressIconArrowDown}>
                        <Icon name="angle-up" size={24} color="#481610" />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={{alignItems: 'center'}}
                        onPress={this.onPressIconArrowDown}>
                        <Icon name="angle-down" size={24} color="#481610" />
                      </TouchableOpacity>
                    )}
                  </>
                )}
              </>
            ) : (
              <>
                {this.state.openCard ? (
                  <TouchableOpacity
                    style={{alignItems: 'center'}}
                    onPress={this.onPressIconArrowDown}>
                    <Icon name="angle-up" size={24} color="#481610" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{alignItems: 'center'}}
                    onPress={this.onPressIconArrowDown}>
                    <Icon name="angle-down" size={24} color="#481610" />
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        </View>
        {this.state.openCard && (
          <View style={[styles.containerInfo, containerInfoImage]}>
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
            ) : (
              <></>
            )}
            {note.picture !== '' ? (
              <View style={styles.photo}>
                <ImageRectangle sourceImage={note.picture} />
              </View>
            ) : (
              <></>
            )}
          </View>
        )}
      </>
    );
  }
}
