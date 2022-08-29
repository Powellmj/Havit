import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { handleClose } from '../actions/sidebar_actions'
import { createHabit, updateHabit } from '../actions/habit_actions'

const HabitForm = (props) => {
  const [formData, setFormData] = useState(() => (
    { name: '', description: '', days_of_week: [], time_of_day: '', ...props }
  ))

  const dispatch = useDispatch()

  const update = (value, field) => {
    if (field === "days_of_week") {
      let index = formData.days_of_week.indexOf(value);
      let newDays = formData.days_of_week;
      if (index !== -1) {
        newDays.splice(index)
      } else {
        newDays.push(value)
      }
      setFormData(() => ({ ...formData, [field]: newDays }))
    } else {
      setFormData(() => ({ ...formData, [field]: value }))
    }
  }

  const renderDaysOfWeek = () => {
    return ["S", "M", "T", "W", "TH", "F", "SA"].map((day) => {
      return (
      <div key={`day-of-week-${day}`} className="form-check form-check-inline">
        <input 
          className="form-check-input" 
          onChange={e => update(e.currentTarget.value, 'days_of_week')}
          type="checkbox" 
          id={`inlineCheckbox${day}`} 
          checked={formData.days_of_week.includes(day)}
          value={day} />
        <label className="form-check-label" htmlFor={`inlineCheckbox${day}`}>{day}</label>
      </div>
      )
    })
  }

  const renderTimesOfDay = () => {
    return ["Anytime", "Morning", "Afternoon", "Night"].map((time) => {
      return (
        <div key={`time-of-day-${time}`} className="form-check form-check-inline">
          <input
            className="form-check-input"
            onChange={e => update(e.currentTarget.value, 'time_of_day')}
            type="radio"
            name="inlineRadioOptions"
            id={`inlineRadio${time}`}
            checked={formData.time_of_day === time}
            value={`${time}`} />
          <label className="form-check-label" htmlFor={`inlineRadio${time}`}>{time}</label>
        </div>
      )
    })
  }

  const handleSubmit = () => {
    if (formData._id) {
      dispatch(updateHabit(formData))
      dispatch(handleClose())
    } else {
      dispatch(createHabit(formData))
      dispatch(handleClose())
    }
  };

  return (
    <>
      <div className="input-group mb-3">
        <input 
          type="text" 
          onChange={e => update(e.currentTarget.value, 'name')} 
          className="form-control" 
          placeholder="Name" 
          aria-label="Name"
          value={formData.name}/>
      </div>
      <div className="input-group mb-3">
        <input 
          type="text" 
          onChange={e => update(e.currentTarget.value, 'description')} 
          className="form-control" 
          placeholder="Description" 
          aria-label="Description"
          value={formData.description}/>
      </div>
      { renderDaysOfWeek() }
      { renderTimesOfDay() }
      <button onClick={handleSubmit} type="button" className="btn btn-success">Success</button>
  </>
  );
}

export default HabitForm