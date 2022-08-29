import { combineReducers } from 'redux';
import ui from './ui_reducer';
import entities from './entities_reducer'

const RootReducer = combineReducers({
  entities,
  ui
});

export default RootReducer;