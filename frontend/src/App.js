import './main.scss';
import Container from 'react-bootstrap/Container'
import HomePage from './components/HomePage';
import Navbarg from './components/Navbar';
import React from 'react';

function App() {
  return (
    <div className="App">
        <Navbarg />
        <Container fluid>
        <HomePage/>
        </Container>
    </div>
  );
}

export default App;
