import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ImageCircle from '../../components/ImageCircle';
import CardsNote from '../../components/CardsNote';
import Header from '../../components/Header';

import styles from './styles';

import {connect} from 'react-redux';
import {watchNotes, deleteNote} from '../../actions';

class History extends Component {
  componentDidMount() {
    const pet = this.props.route.params.pet;
    this.props.watchNotes(pet);
  }

  render() {
    return (
      <>
        <Header title="Histórico" navigation={this.props.navigation} />
        <View style={styles.container}>
          <View style={styles.containerInfo}>
            <View style={styles.containerImage}>
              <ImageCircle sourceImage={this.props.route.params.pet.picture} />
            </View>
            <Text style={styles.text}>
              Todas as anotações do {this.props.route.params.pet.name}!
            </Text>
          </View>
          <CardsNote
            notes={this.props.notes}
            name={this.props.route.params.pet.name}
            id={this.props.route.params.pet.id}
            onPressEdit={(parameters) =>
              this.props.navigation.navigate('UpdateNote', parameters)
            }
            onPressDelete={async (parameters) => {
              await this.props.deleteNote(parameters.id, parameters.note);
            }}
          />
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {listaNotes} = state;

  if (listaNotes === null) {
    return {notes: listaNotes};
  }

  const keys = Object.keys(listaNotes);
  const listaNotesWithId = keys.map((key) => {
    return {...listaNotes[key], id: key};
  });

  return {notes: listaNotesWithId};
};

const mapDispatchToProps = {
  watchNotes,
  deleteNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
