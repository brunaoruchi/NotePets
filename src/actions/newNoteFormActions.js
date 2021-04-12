import firebase from 'firebase';

export const SET_FIELD_NOTE = 'SET_FIELD_NOTE';
export const setFieldNote = (field, value) => {
  return {
    type: SET_FIELD_NOTE,
    field,
    value,
  };
};

export const NOTE_SAVED_SUCCESS = 'NOTE_SAVED_SUCCESS';
export const noteSavedSuccess = () => {
  return {
    type: NOTE_SAVED_SUCCESS,
  };
};

export const SET_ALL_FIELDS_NOTE = 'SET_ALL_FIELDS_NOTE';
export const setAllFieldsNote = (note) => ({
  type: SET_ALL_FIELDS_NOTE,
  note: note,
});

export const RESET_FORM_NOTE = 'RESET_FORM_NOTE';
export const resetFormNote = () => ({
  type: RESET_FORM_NOTE,
});

export const saveNote = (petId, note) => {
  const {currentUser} = firebase.auth();

  return async (dispatch) => {
    if (note.id) {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/pets/${petId}/notes/${note.id}`)
        .set(note);
    } else {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/pets/${petId}/notes`)
        .push(note);
    }

    dispatch(noteSavedSuccess());
  };
};
