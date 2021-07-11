import React from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom"
import Experience from './components/Experience/Experience';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
