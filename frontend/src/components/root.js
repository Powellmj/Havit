import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from '../App';
import SideBar from './SideBar'

const Root = ({ store }) => (
  <Provider store={store}>
    <SideBar />
    <AppContainer/>
  </Provider>
);

export default Root;