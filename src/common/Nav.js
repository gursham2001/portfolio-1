import { Link } from 'react-scroll'

import React from 'react'

function NavBar() {

  function onMouseLeave(e) {
    e.target.style.color = 'white'
  }
  function onMouseOver(e) {
    e.target.style.color = '#1F51FF'
  }

  return (
    <div className='start' style={{ height: 1000 }}>
      <main>
        <div className='navbar'>
          <div className='nav-content'>
            <Link className='nav-margin' to='skills' smooth='true' spy={true} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>SKILLS</Link>
            <Link className='nav-margin' to='projects' smooth='true' spy={true} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>PROJECTS</Link>
            <Link className='nav-margin' to='interest' smooth='true' spy={true} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>INTEREST</Link>
            <Link className='nav-margin' to='contact' smooth='true' spy={true} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>CONTACT</Link>
          </div>
        </div>
      </main>
      <div className='wrapper'>
        <div className='intro-container'>
      <div style={{ height: 900 }}>
        <div className='intro'>
        <p className='name'>Gursham Singh</p>
        <p className='role'>Front-End Web Developer</p>
        <a href='https://www.canva.com/design/DAEkOIIO1LI/MWTsjMBnL6vgk-mbxbzoRw/view?utm_content=DAEkOIIO1LI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton#1' target='_blank' rel="noopener noreferrer">
        <button className='cv-button'>View CV</button>
        </a>
        </div>
      </div>
    </div>

        <div className='about-container'>
          <div className='about-text'>
          <p className='about-text-p1'>
          Hello, My name is Gursham Singh. I am a Junior Developer based in Nottingham.
          </p>
          <p className='about-text-p2'>My passion for development began as I was taking steps towards a degree in Sociology. In which I discovered Codecademy and W3Schools and started to play around with the tools that make up the backbone of web development. This then blossomed into a fascination with development, leading to watching video tutorials into the night and dreaming of bugs to debug. I then sought out professional advice from a developer who advised me that a boot camp would provide me with the necessary tools I would need to progress and having now graduating from General Assembly.
          </p>
          <p className='about-text'>It was at General Assembly where I learnt how to use JS, React, Python and more and combine them to create a variety of projects. Ever since I have not looked back, each day, as I learn more code and uncover new bugs, my zeal and passion for pursuing a career in software development grows even greater. Now my goal is to make strides in my development capabilities and grow as a developer.
          </p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default NavBar