import { Link } from 'react-scroll'

import React from 'react'


// const image1 = 'https://imgur.com/SRyElly.png'
// const image2 = 'https://imgur.com/DUGY6Ss.png'

function NavBar() {

  function onMouseLeave(e) {
    e.target.style.color = '#fcf6f5'
  }
  function onMouseOver(e) {
    e.target.style.color = 'black'
  }

  return (
    <div className='start'>
      <main>
        <div className='navbar'>
          <div className='nav-content'>
            <Link className='nav-margin' to='aboutMe' smooth='true' spy={true} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>About</Link>
            <Link className='nav-margin' to='projects' smooth='true' spy={true} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>Projects</Link>
            <Link className='nav-margin' to='interest' smooth='true' spy={true} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>Interests</Link>
            <Link className='nav-margin' to='contact' smooth='true' spy={true} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>Contact</Link>
          </div>
        </div>
      </main>
      <section className='home' id='home'>
      <div style={{ height: 900 }}>
        <div className='parallax-intro'>
        <p className='name'>Gursham Singh</p>
        <br></br>
        <p className='role'>Junior Software Developer</p>
        </div>
      </div>
      </section>
    </div>
  )
}

export default NavBar