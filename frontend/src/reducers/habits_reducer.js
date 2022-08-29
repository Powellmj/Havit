import { RECEIVE_HABIT, RECEIVE_ALL_HABITS, REMOVE_HABIT } from '../actions/habit_actions';

const initialState = {};

const habits_reducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_HABITS:
      return Object.assign({}, state, action.habits);
    case RECEIVE_HABIT:
      return Object.assign({}, state, { [action.habit._id]: action.habit })
    case REMOVE_HABIT:
      let newState = Object.assign({}, state)
      delete newState[action._id]
      return newState
    default:
      return state;
  }
}

export default habits_reducer