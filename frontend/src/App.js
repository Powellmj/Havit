import './main.scss';
import Container from 'react-bootstrap/Container'
import HomePage from './components/HomePage';
import Navbarg from './components/Navbar';
import ThemeSwitch from "./components/ThemeSwitch";
import MiscellaneousCheese from "./components/MiscellaneousCheese";
import { ThemeProvider } from "./hooks/useThemeContext";
import React from 'react';
import "./scss/bootstrap.scss";

function App() {
  return (
    <div className="App">
        <ThemeProvider>
        <Navbarg />
        <Container fluid>
        <HomePage/>
          <ThemeSwitch />
          <MiscellaneousCheese />
        
        </Container>
        </ThemeProvider>
    </div>
  );
}

export default App;
