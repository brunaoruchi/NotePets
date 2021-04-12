import firebase from 'firebase';
import {Alert} from 'react-native';

export const SET_PETS = 'SET_PETS';
const setPets = (pets) => ({
  type: SET_PETS,
  pets: pets,
});

export const watchPets = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/pets`)
      .on('value', (snapshot) => {
        const pets = snapshot.val();
        const action = setPets(pets);
        dispatch(action);
      });
  };
};

export const deletePet = (pet) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Exclusão',
        `Deseja excluir o pet ${pet.name}?`,
        [
          {
            text: 'Não',
            onPress: () => {
              resolve(false);
            },
            style: 'cancel',
          },
          {
            text: 'Sim',
            onPress: async () => {
              const {currentUser} = firebase.auth();

              try {
                await firebase
                  .database()
                  .ref(`/users/${currentUser.uid}/pets/${pet.id}`)
                  .remove();

                resolve(true);
              } catch (e) {
                reject(e);
              }
            },
          },
        ],
        {cancelable: false},
      );
    });
  };
};
