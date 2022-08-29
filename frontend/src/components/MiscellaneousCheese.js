import React from 'react';
import { useThemeContext } from "../hooks/useThemeContext";
import { handleOpen } from '../actions/sidebar_actions'
import { useDispatch } from 'react-redux'
import HabitForm from './HabitForm';

export default function MiscellaneousCheese() {
  // define button style by darkMode
  const { darkMode } = useThemeContext();
  const dispatch = useDispatch()
  const btnVariant = darkMode ? "outline-highlight" : "primary";
  const shadow = darkMode ? "shadow" : "shadow-sm";

  return (
    <div className="d-flex flex-column align-items-center">
      <div
        className={`card bg-accent-1 my-3 ${shadow}`}
        style={{ width: "18rem" }}
      >
        <img
          src="https://unsplash.com/photos/kPqaqug998Y/download?force=true&w=640"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title mt-3">New Habit</h5>
          <p className="card-text">
            Become a better you! Click "Cheese me up" to create a new habit.
          </p>
          <button onClick={() => dispatch(handleOpen(HabitForm))} className={`btn btn-${btnVariant}`}>Cheese me up</button>
        </div>
      </div>
    </div>
  );
}
