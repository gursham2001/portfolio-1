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
            <Link className='nav-margin' to='aboutMe' smooth='true' spy={true} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>ABOUT</Link>
            <Link className='nav-margin' to='projects' smooth='true' spy={true} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>PROJECTS</Link>
            <Link className='nav-margin' to='interest' smooth='true' spy={true} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>INTEREST</Link>
            <Link className='nav-margin' to='contact' smooth='true' spy={true} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>CONTACT</Link>
          </div>
        </div>
      </main>
      <section className='home' id='home'>
      <div style={{ height: 900 }}>
        <div className='parallax-intro'>
        <p className='name'>Gursham Singh</p>
        <br></br>
        <p className='role'>Front-End Web Developer</p>
        <br></br>
        <br></br>
        <a href='https://www.canva.com/design/DAEkOIIO1LI/MWTsjMBnL6vgk-mbxbzoRw/view?utm_content=DAEkOIIO1LI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton#1' target='_blank' rel="noopener noreferrer">
        <button className='cv-button'>  View CV  </button>
        </a>
        </div>
      </div>
      </section>
    </div>
  )
}

export default NavBar