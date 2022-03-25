import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function Projects() {


  // function onMouseLeave1(e) {
  //   e.target.style.color = 'white'
  // }
  // function onMouseOver1(e) {
  //   e.target.style.color = 'DBA809'
  // }

  // function onMouseLeave2(e) {
  //   e.target.style.color = 'white'
  // }
  // function onMouseOver2(e) {
  //   e.target.style.color = 'DBA809'
  // }

  return (
    <div className='projects' id='projects'>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
      <h1 className='headers'>Projects.</h1>
      <br></br>
      <hr></hr>
      <div className="container">
        <div className="project-container">
          <div className="image-conatainer">
            <a href='https://gursham2001.github.io/project-1/'>
              <img className='screenshot' src='https://imgur.com/UGqEtrq.png' alt='sithInvaders'/>
            </a>
          </div>
          <div className="text">
            <h4 className='project-header'>Sith Invaders</h4>
            <br/>
            <p className='project-text'>Sith Invaders was a project I had a week to build a grid based game to consolidate and showcase the JS fundamentals we had learnt from the GA course. using JavaScript, CSS and HTML</p>
            <br></br>
            <br></br>
            <hr className='project-hr'></hr>
            <br></br>
            <div className='project-links'>
              <div className="icons" >
                <a href='https://github.com/gursham2001/project-1'>
                  <i id='project-giticons' className="devicon-github-original-wordmark"></i>
                </a>

                <a className='trying' href='https://gursham2001.github.io/project-1/'>
                  <FontAwesomeIcon className='fA' icon={faLink}></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div className="image-conatainer">
            <a href='https://github.com/gursham2001/sei-project2-reactathon'>
              <img className='screenshot' src='https://imgur.com/VYiM3ir.png' alt='sithInvaders'/>
            </a>
          </div>
          <div className="text">
            <h4 className='project-header'>SuperHeroes</h4>
            <br/>
            <p className='project-text'>We worked in a pair to build a React App using a third party API to populate our site with data. Prior to this Reactathon we had spent a few weeks in class learning the fundamentals of React from axios GET and POST request to React state and JSX </p>
            <br></br>
            <hr className='project-hr'></hr>
            <br></br>
            <div className="icons">
              <a href='https://github.com/gursham2001/sei-project2-reactathon'>
                <i id='project-giticons' className="devicon-github-original-wordmark"></i>
              </a>
              <a href='https://superheros-ga.netlify.app/'>
                <FontAwesomeIcon className='fA' icon={faLink}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div className="image-conatainer">
            <a href='https://trippy-maps.netlify.app/'>
              <img className='screenshot' src='https://imgur.com/Va5wUax.png' alt='sithInvaders'/>
            </a>
          </div>
          <div className="text">
            <h4 className='project-header'>Trippy-Maps</h4>
            <br/>
            <p className='project-text'>As a group of four we were given just over a week to create a full-stack MERN app with CRUD functionality, we decided to use mapbox and create a site in which users could see places they could visit other then the popular generic parts of london. Other functionalities include signing in and being able to put your own suggestions up for others to see.</p>
            <br></br>
            <br></br>
            <hr className='project-hr'></hr>
            <br></br>
            <div className="icons">
              <a href='https://github.com/gursham2001/project-3-client'>
                <i id='project-giticons' className="devicon-github-original-wordmark"></i>
              </a>
              <a href='https://trippy-maps.netlify.app/'>
                <FontAwesomeIcon className='fA' icon={faLink}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div className="image-conatainer">
            <a href='https://project-expo-project-4.netlify.app/'>
              <img className='screenshot' src='https://imgur.com/UZEXmKK.png' alt='sithInvaders'/>
            </a>
          </div>
          <div className="text">
            <h4 className='project-header'>Project Expo</h4>
            <br/>
            <p className='project-text'>The final project of the General Assembly course we were given just over a week to a full-stack app with CRUD functionality similar to project 3, however we built the back-end using Django and Python. For this project we decided to create a site in which GA students can upload completed projects and GA instructors can easily access them and reference back to show students examples and provide insiration for newer students.</p>
            <br></br>
            <hr className='project-hr'></hr>
            <br></br>
            <div className="icons">
              <a href='https://github.com/gursham2001/Client'>
                <i id='project-giticons' className="devicon-github-original-wordmark"></i>
              </a>
              <a href='https://project-expo-project-4.netlify.app/'>
                <FontAwesomeIcon className='fA' icon={faLink}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects