import React from 'react';

import AboutMe from './components/AboutMe'
import Interest from './components/Interests'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import NavBar from './common/Nav'


function App() {

  return (
  <>
  <div className="appContainer">
    <NavBar/>
    <AboutMe />
    <Projects />
    <Interest />
    <ContactMe />
    </div>
  </>
  );
}

export default App;
