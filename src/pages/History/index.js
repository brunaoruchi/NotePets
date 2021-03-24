import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ImageCircle from '../../components/ImageCircle';
import CardNote from '../../components/CardNote';

import Header from '../../components/Header';

import styles from './styles';

export default class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '1',
      data: {
        pets: [
          {
            id: '1',
            name: 'Zoe',
            picture: 'https://purr.objects-us-east-1.dream.io/i/wnKv0.jpg',
            breed: 'SRD',
            weight: '5',
            dateBirthday: '19/03/18',
            notesPet: [
              {
                id: '1',
                date: '10/02/2021',
                dateRemember: '17/02/2021',
                cattegory: '1',
                picture:
                  'https://pixabay.com/get/g6f18a10b4e431b08e536c24ed24dfbfa7829ce406097d04a98e492c14ceffc763279b964a65c75ed31f82f6c055304e7_1280.jpg',
                observation:
                  'Deve ser aplicado a medicação 1 no período de 12...',
              },
              {
                id: '2',
                date: '01/02/2021',
                dateRemember: '10/02/2021',
                cattegory: '1',
                picture: 'https://purr.objects-us-east-1.dream.io/i/fqapr.jpg',
                observation:
                  'Deve ser aplicado a medicação 1 no período de 12 em 12 horas. Fazer a limpeza da região durante uma semana.',
              },
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <>
        <Header title="Histórico" navigation={this.props.navigation} />
        <View style={styles.container}>
          <View style={styles.containerInfo}>
            <View style={styles.containerImage}>
              <ImageCircle />
            </View>
            <Text style={styles.text}>Todas as anotações do Rei!</Text>
          </View>
          <CardNote note={this.state.data.pets[0].notesPet[1]} />
        </View>
      </>
    );
  }
}
