import React from 'react';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import ProjectsPage from './components/ProjectsPage'
import AboutMe from './components/AboutMe'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact render={() => <HomePage />} />
      <Route path="/projects" render={() => <ProjectsPage />} />
      <Route path="/aboutme" render={() => <AboutMe />} />
      <Route path="/contact" render={() => <ContactPage />} />
      <Footer />


    </Router>
  );
}

export default App;
