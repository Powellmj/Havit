import * as APIUtil from '../util/habit_util';

export const RECEIVE_HABIT = "RECEIVE_HABIT";
export const RECEIVE_ALL_HABITS = "RECEIVE_ALL_HABITS";
export const REMOVE_HABIT = "REMOVE_HABIT";

export const receiveHabit = habit => ({
  type: RECEIVE_HABIT,
  habit
});

export const receiveAllHabits = habits => ({
  type: RECEIVE_ALL_HABITS,
  habits
});

export const removeHabit = _id => ({
  type: REMOVE_HABIT,
  _id
});

export const requestHabit = habitId => dispatch => APIUtil.fetchHabit(habitId)
  .then(habit => (
    dispatch(receiveHabit(habit.data))
  ))

export const requestAllHabits = () => dispatch => APIUtil.fetchAllHabits()
  .then(habits => {
    let habitsObj = {}
    habits.data.forEach(habit => {
      habitsObj[habit._id] = habit
    })
    dispatch(receiveAllHabits(habitsObj))
  })

export const createHabit = habit => dispatch => (
  APIUtil.createHabit(habit).then((response) => {
    dispatch(receiveHabit(response.data))
  }
  // , err => (
  //   dispatch(receiveErrors(err.response.data))
  // )
  )
)

export const createManyHabits = habit => dispatch => (
  APIUtil.createManyHabits(habit).then((response) => {
    dispatch(requestAllHabits())
  }
    // , err => (
    //   dispatch(receiveErrors(err.response.data))
    // )
  )
)

export const updateHabit = habit => dispatch => (
  APIUtil.updateHabit(habit).then((response) => {
    dispatch(receiveHabit(response.data))
  }
    // , err => (
    //   dispatch(receiveErrors(err.response.data))
    // )
  )
)

export const updateManyHabits = updateObj => dispatch => (
  APIUtil.updateManyHabits(updateObj).then((response) => {
    dispatch(requestAllHabits())
  }
    // , err => (
    //   dispatch(receiveErrors(err.response.data))
    // )
  )
)

export const deleteHabit = (_id) => dispatch => {
  APIUtil.deleteHabit(_id).then(response => {
    dispatch(removeHabit(_id))
  });
}