import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import './App.css';

import Nav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';
import Showcase from './components/Showcase';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/portfolio' element={<Showcase />} />
            <Route path='/contact' element={<ContactForm />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
