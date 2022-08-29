import React from 'react';
import Sidebar from './SideBar';
import { useSelector } from 'react-redux'

function HabitIndexItem({ name, description, days_of_week, time_of_day, _id }) {

  return (
      <div key={_id} className="card">
          <div className="card-body">
            <p className="card-text">{name}</p>
          </div>
      </div>
  );
}

export default HabitIndexItem;