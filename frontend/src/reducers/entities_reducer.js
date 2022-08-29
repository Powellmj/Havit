import { combineReducers } from 'redux';
import habits from './habits_reducer'

const entities_reducer = combineReducers({
  habits
});

export default entities_reducer;