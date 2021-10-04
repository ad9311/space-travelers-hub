import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';

const App = () => (
  <>
    <Router>
      <NavBar />
    </Router>
  </>
);

export default App;
