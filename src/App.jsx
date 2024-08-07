import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';


const App = () => {
  const user = null; // Replace with your user authentication logic

  return (
    <Router>
      <NavBar user={user} />
    </Router>
  );
};

export default App;
