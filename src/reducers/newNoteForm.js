import {
  SET_FIELD_NOTE,
  NOTE_SAVED_SUCCESS,
  SET_ALL_FIELDS_NOTE,
  RESET_FORM_NOTE,
} from '../actions';

const INITIAL_STATE = {
  id: null,
  date: new Date().toLocaleDateString('pt-BR'),
  dateRemember: new Date().toLocaleDateString('pt-BR'),
  category: '',
  picture: '',
  observation: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FIELD_NOTE:
      const clonedState = {...state};
      clonedState[action.field] = action.value;
      return clonedState;
    case NOTE_SAVED_SUCCESS:
      return INITIAL_STATE;
    case SET_ALL_FIELDS_NOTE:
      return action.note;
    case RESET_FORM_NOTE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
