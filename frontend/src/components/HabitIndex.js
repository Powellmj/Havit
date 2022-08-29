import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import HabitIndexItem from './HabitIndexItem'
import { requestAllHabits } from '../actions/habit_actions'

function HabitIndex() {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(requestAllHabits()) }, []);
  const habits = useSelector(state => state.entities.habits) || [];

  const renderHabits = () => {
    return Object.values(habits).map((habit) => (
      <HabitIndexItem {...habit}/>
    ))
  }

  return (
      <ul className="list-group">
        {renderHabits()}
      </ul>
  );
}

export default HabitIndex;