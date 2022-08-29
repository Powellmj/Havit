import { combineReducers } from 'redux';
import sidebar from './sidebar_reducer';

const ui_reducer = combineReducers({
  sidebar
});

export default ui_reducer;