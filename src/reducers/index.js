import {combineReducers} from 'redux';
import userReducer from './userReducer';
import newPetForm from './newPetForm';
import petReducer from './petReducer';
import newNoteForm from './newNoteForm';
import noteReducer from './noteReducer';

export default combineReducers({
  user: userReducer,
  petForm: newPetForm,
  listaPets: petReducer,
  noteForm: newNoteForm,
  listaNotes: noteReducer,
});
