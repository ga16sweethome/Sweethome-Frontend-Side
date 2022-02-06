import { combineReducers } from 'redux';
import filterReducer from './FilterShowcase/filterReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
});

export default rootReducer;
