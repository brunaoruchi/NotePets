import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import Header from '../../components/Header';
import CardsPet from '../../components/CardsPet';
import Button from '../../components/Button';

import styles from './styles';

import {connect} from 'react-redux';
import {watchPets, deletePet} from '../../actions';

class Pets extends React.Component {
  componentDidMount() {
    this.props.watchPets();
  }

  render() {
    return (
      <>
        <Header title="Pets" navigation={this.props.navigation} />
        <View style={styles.container}>
          {this.props.pets == null ? (
            <Button
              label="Adicionar novo pet"
              onPress={() => this.props.navigation.navigate('CreatePet')}
            />
          ) : (
            <>
              <View style={styles.containerText}>
                <Text style={styles.text}>
                  Que tal atualizar as informações do seu pet? O histórico
                  também está aqui!
                </Text>
              </View>
              <View style={styles.containerButton}>
                <Button
                  label="Adicionar novo pet"
                  onPress={() => this.props.navigation.navigate('CreatePet')}
                />
              </View>
              <CardsPet
                pets={this.props.pets}
                onPressEdit={(parameters) =>
                  this.props.navigation.navigate('UpdatePet', parameters)
                }
                onPressDelete={async (parameters) => {
                  await this.props.deletePet(parameters.pet);
                }}
                onPressHistory={(parameters) =>
                  this.props.navigation.navigate('History', parameters)
                }
                onPressCreate={(parameters) =>
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

const mapDispatchToProps = {
  watchPets,
  deletePet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pets);
