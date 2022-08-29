import React from 'react';
import Sidebar from './SideBar';
import { useDispatch } from 'react-redux'
import { deleteHabit } from '../actions/habit_actions';
import { handleOpen } from '../actions/sidebar_actions'
import HabitForm from './HabitForm';

function HabitIndexItem(props) {
  let { name, description, days_of_week, time_of_day, _id } = props
  const dispatch = useDispatch()
  return (
      <div key={_id} className="card">
          <div className="card-body">
            <div className="row row-cols-2">
              <div className="col-sm-8">{name}</div>
              <div className="btn-group col-sm-4" role="group">
                <button onClick={() => dispatch(handleOpen(<HabitForm {...props}/>))} type="button" className="btn btn-info">Edit</button>
                <button onClick={() => dispatch(deleteHabit(_id))} type="button" className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
      </div>
  );
}

export default HabitIndexItem;