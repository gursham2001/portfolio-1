function AboutMe() {
  return (
    <div className='aboutMe' id='aboutMe'>
      <div className="about-container">
        <div className="flex-child about">
          <h1 className='about-header'>ABOUT.</h1>
          <br></br>
          <p className='about-text'>
            Hello, My name is Gursham Singh. I am a Junior Developer based in Nottingham.
            <br></br>
            <br></br>
            My passion for development began as I was taking steps towards a degree in Sociology. In which I discovered Codecademy and W3Schools and started to play around with the tools that make up the backbone of web development. This then blossomed into a fascination with development, leading to watching video tutorials into the night and dreaming of bugs to debug. I then sought out professional advice from a developer who advised me that a boot camp would provide me with the necessary tools I would need to progress and having now graduating from General Assembly.
            <br></br>
            <br></br>
            It was at General Assembly where I learnt how to use JS, React, Python and more and combine them to create a variety of projects. Ever since I have not looked back, each day, as I learn more code and uncover new bugs, my zeal and passion for pursuing a career in software development grows even greater. Now my goal is to make strides in my development capabilities and grow as a developer.
          </p>
        </div>

        <div className="flex-child techs">
          <h1 className='headers'>Technicals</h1>
          <section className='techs-text'>
            <hr></hr>
            <br></br>
            <h4>FRONT-END</h4>
            <br></br>
            <p>HTML,CSS,CSS frameworks, SASS, JavaScript, React, Axios, Rest API requestes</p>
            <br></br>
            <h4>BACK-END</h4>
            <br></br>
            <p>Python, Django, PostgesSQL, Express, Node.js, MongoDB</p>
            <br></br>
            <h4>PACKAGE</h4>
            <br></br>
            <p>NPM, Yarn, Pip, Pipenv</p>
            <br></br>
            <h4>Deployment</h4>
            <br></br>
            <p>Netlify, Heroku</p>
            <br></br>
            <h4>Version Control</h4>
            <br></br>
            <p>Git, GitHub</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutMe