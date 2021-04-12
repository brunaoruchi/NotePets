import * as React from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header';
import Cards from '../../components/Cards';

import styles from './styles';

import {connect} from 'react-redux';
import {watchPets} from '../../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.watchPets();
  }

  render() {
    return (
      <>
        <Header title="Anotações" navigation={this.props.navigation} />
        <View style={styles.container}>
          {this.props.pets == null ? (
            <>
              <View style={styles.containerText}>
                <Text style={styles.text}>
                  Não há nenhuma anotação dos seus pets :(
                </Text>
              </View>
            </>
          ) : (
            <>
              <View style={styles.containerText}>
                <Text style={styles.text}>
                  Dá uma olhada nas últimas anotações do(s) seu(s) pet(s) e
                  adicione alguma nova!
                </Text>
              </View>
              <Cards
                notes={this.props.pets}
                onPressAddNote={(parameters) =>
                  this.props.navigation.navigate('CreateNote', parameters)
                }
              />
            </>
          )}
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {listaPets} = state;

  if (listaPets === null) {
    return {pets: listaPets};
  }

  const keys = Object.keys(listaPets);
  const listaPetsWithId = keys.map((key) => {
    return {...listaPets[key], id: key};
  });
  return {pets: listaPetsWithId};
};

export default connect(mapStateToProps, {watchPets})(Home);
