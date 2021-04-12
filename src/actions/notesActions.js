import firebase from 'firebase';
import {Alert} from 'react-native';

export const SET_NOTES = 'SET_NOTES';
const setNotes = (notes) => ({
  type: SET_NOTES,
  notes: notes,
});

export const watchNotes = (pet) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/pets/${pet.id}/notes`)
      .on('value', (snapshot) => {
        const notes = snapshot.val();
        const action = setNotes(notes);
        dispatch(action);
      });
  };
};

export const deleteNote = (petId, note) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Exclusão',
        `Deseja excluir a anotação do dia ${new Date(note.date).getDate()}/${
          new Date(note.date).getMonth() + 1
        }/${new Date(note.date).getFullYear()}?`,
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
                  .ref(
                    `/users/${currentUser.uid}/pets/${petId}/notes/${note.id}`,
                  )
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
