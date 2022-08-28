import React from 'react';
import { connect, useSelector } from 'react-redux'

const Sidebar = () => {
  const visible = useSelector(state => state.ui.Sidebar.visible);
  const displayedComponent = 
    useSelector(state => state.ui.Sidebar.component) ||
    defaultSideBarComponent;

  return (
    visible && (
      <div class="sidebar d-flex flex-column flex-shrink-0 p-3 bg-light">
        { displayedComponent() }
      </div>
    )
  );
}

  const defaultSideBarComponent = () => {
    return (
      <div>
        <span class="fs-4">Sidebar</span>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            Home
          </li>
          <li>
            Dashboard
          </li>
          <li>
            Orders
          </li>
          <li>
            Products
          </li>
          <li>
            Customers
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          </ul>
        </div>
      </div>
    )
  }

  export default Sidebar;