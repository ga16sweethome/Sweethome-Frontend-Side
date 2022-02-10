import { combineReducers } from 'redux';
import appointmentForm from './appointment/appointmentForm';
import filterReducer from './filterShowcase/filterReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  appointment: appointmentForm,
});

export default rootReducer;
