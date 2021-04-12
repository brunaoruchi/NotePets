import firebase from 'firebase';

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value,
  };
};

export const PET_SAVED_SUCCESS = 'PET_SAVED_SUCCESS';
export const petSavedSuccess = () => {
  return {
    type: PET_SAVED_SUCCESS,
  };
};

export const SET_ALL_FIELDS = 'SET_ALL_FIELDS';
export const setAllFields = (pet) => ({
  type: SET_ALL_FIELDS,
  pet: pet,
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM,
});

export const savePet = (pet) => {
  const {currentUser} = firebase.auth();

  return async (dispatch) => {
    if (pet.id) {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/pets/${pet.id}`)
        .set(pet);
    } else {
      await firebase.database().ref(`/users/${currentUser.uid}/pets`).push(pet);
    }

    dispatch(petSavedSuccess());
  };
};
