import React from 'react';

const HabitForm = () => {
  return (
    <>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Name" aria-label="Name"/>
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Description" aria-label="Description"/>
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Poop" aria-label="Poop"/>
      </div>
  </>
  );
}

export default HabitForm