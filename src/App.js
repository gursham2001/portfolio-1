import React from 'react';

import AboutMe from './components/AboutMe'
import Interest from './components/Interests'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import NavBar from './common/Nav'

// import { Parallax } from 'react-parallax'
// const image1 = "https://imgur.com/naNeZ3y.png"

function App() {

  return (
    <>
    <NavBar/>
    <AboutMe />
    <Projects />
    <Interest />
    <ContactMe />
  </>
  );
}

export default App;
