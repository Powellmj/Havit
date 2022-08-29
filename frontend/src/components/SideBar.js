import React from 'react';
import { useSelector } from 'react-redux'

const Sidebar = ({children}) => {
  const visible = useSelector(state => state.ui.sidebar.visible);

  return (
    visible && (
      <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-light">
          {children || defaultSideBarComponent() }
      </div>
    )
  );
}

  const defaultSideBarComponent = () => {
    return (
      <div>
        <span className="fs-4">Sidebar</span>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
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
        <div className="dropdown">
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          </ul>
        </div>
      </div>
    )
  }

  export default Sidebar;