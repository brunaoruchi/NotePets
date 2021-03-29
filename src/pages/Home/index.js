import * as React from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header';
import Cards from '../../components/Cards';

import styles from './styles';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        pets: [
          {
            id: '1',
            name: 'Zoe',
            picture:
              'https://cdn.pixabay.com/photo/2018/01/05/13/00/cat-3062885_960_720.jpg',
            breed: 'SRD',
            weight: '5',
            dateBirthday: '03/19/18',
            notes: [
              {
                id: '1',
                date: '11/15/20',
                dateRemember: '11/15/20',
                category: '3',
                picture: '',
                observation: '',
              },
              {
                id: '2',
                date: '02/15/21',
                dateRemember: '03/15/21',
                category: '1',
                picture:
                  'https://cdn.pixabay.com/photo/2014/02/03/11/51/medicine-257349_960_720.jpg',
                observation:
                  'Deve ser aplicado a medicação 1 no período de 12 em 12 horas. Fazer a limpeza da região durante uma semana.',
              },
            ],
          },
          {
            id: '2',
            name: 'Mamba',
            picture:
              'https://cdn.pixabay.com/photo/2016/07/10/11/58/cat-1507603_960_720.jpg',
            breed: 'SRD',
            weight: '5,25',
            dateBirthday: '11/15/18',
            notes: [
              {
                id: '1',
                date: '01/10/21',
                dateRemember: '02/11/21',
                category: '4',
                picture: '',
                observation: '',
              },
              {
                id: '2',
                date: '01/15/21',
                dateRemember: '02/01/21',
                category: '0',
                picture:
                  'https://cdn.pixabay.com/photo/2017/12/26/12/18/cat-3040345_960_720.jpg',
                observation: '',
              },
            ],
          },
          {
            id: '3',
            name: 'Guri',
            picture:
              'https://cdn.pixabay.com/photo/2017/11/26/08/09/black-german-shepherd-2978321_960_720.jpg',
            breed: 'Labrador',
            weight: '5,25',
            dateBirthday: '11/15/08',
            notes: [
              {
                id: '1',
                date: '10/07/20',
                dateRemember: '11/25/21',
                category: '3',
                picture: '',
                observation: '',
              },
              {
                id: '2',
                date: '12/15/20',
                dateRemember: '06/15/21',
                category: '2',
                picture:
                  'https://adocaocaes.files.wordpress.com/2014/11/carteirinha-de-vacina-aysha-21.jpg',
                observation: '',
              },
            ],
          },
          {
            id: '4',
            name: 'Kitty',
            picture:
              'https://cdn.pixabay.com/photo/2016/08/22/22/23/cat-1613088_960_720.jpg',
            breed: 'Siamês',
            weight: '5,25',
            dateBirthday: '11/15/18',
            notes: [
              {
                id: '1',
                date: '11/15/18',
                dateRemember: '11/15/18',
                category: '2',
                picture: '',
                observation: '',
              },
              {
                id: '2',
                date: '11/19/20',
                dateRemember: '5/7/21',
                category: '3',
                picture:
                  'https://tudodebicho.fbitsstatic.net/img/p/vermifugo-vetmax-plus-caes-e-gatos-70683/257381.jpg?w=580&h=580&v=no-change',
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
            onPressAddNote={(parameters) =>
              this.props.navigation.navigate('CreateNote', parameters)
            }
          />
        </View>
      </>
    );
  }
}
