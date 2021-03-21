import * as React from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header';
import Cards from '../../components/Cards';

import styles from './styles';

export default class Home extends React.Component {
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
                  'Deve ser aplicado a medicação 1 no período de 12 em 12 horas. Fazer a limpeza da região durante uma semana.',
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
          {
            id: '2',
            name: 'Rei',
            picture:
              'https://pixabay.com/get/g18ddfcce4e20df4e728b32858bb50f99e79a0a83455754b808dc5b10714f00aeb503b46d97db7d1d6884d2810477af9e_1280.jpg',
            breed: 'SRD',
            weight: '5,25',
            dateBirthday: '15/11/18',
            notesPet: [
              {
                id: '1',
                date: '10/02/2021',
                dateRemember: '17/02/2021',
                cattegory: '1',
                picture:
                  'https://pixabay.com/get/g6f18a10b4e431b08e536c24ed24dfbfa7829ce406097d04a98e492c14ceffc763279b964a65c75ed31f82f6c055304e7_1280.jpg',
                observation: '',
              },
              {
                id: '2',
                date: '01/02/2021',
                dateRemember: '10/02/2021',
                cattegory: '0',
                picture:
                  'https://pixabay.com/get/g6f18a10b4e431b08e536c24ed24dfbfa7829ce406097d04a98e492c14ceffc763279b964a65c75ed31f82f6c055304e7_1280.jpg',
                observation: '',
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
        <Header title="Anotações" navigation={this.props.navigation} />
        <View style={styles.container}>
          <View style={styles.containerText}>
            <Text style={styles.text}>
              Dá uma olhada nas últimas anotações do(s) seu(s) pet(s) e adicione
              alguma nova!
            </Text>
          </View>
          <Cards
            notes={this.state.data.pets}
            onPressAddNote={() => this.props.navigation.navigate('CreateNote')}
          />
        </View>
      </>
    );
  }
}
