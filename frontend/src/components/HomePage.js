import React from 'react';
import Sidebar from './SideBar';
import { useSelector } from 'react-redux'
import HabitIndex from './HabitIndex'
import ThemeSwitch from "./ThemeSwitch";
import MiscellaneousCheese from "./MiscellaneousCheese";

function HomePage() {
  let children = useSelector(state => state.ui.sidebar.component)

  return(
    <>
      <Sidebar children={children}/>
      <ThemeSwitch />
      <MiscellaneousCheese />
      <HabitIndex/>
    </>
  );
}

export default HomePage;