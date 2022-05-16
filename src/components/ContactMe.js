function Contact() {

  function onMouseLeave(e) {
    e.target.style.color = 'white'
  }

  function onMouseOver(e) {
    e.target.style.color = '#1F51FF'
  }

  return (

    <div className='contact' id='contact'>
      <div className='contact-container'>
        <h1 className='headers'>CONTACT.</h1>
        <hr className='hr1'></hr>
        <div className='text-container'>
          <div className='text'>
            <div className='links'>
              <div className='contact-info' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                <a href='mailto: GurshamDev@gmail.com' target='_blank' rel="noopener noreferrer">GurshamDev@gmail.com</a>
              </div>
              <div className='contact-devicons'>
                <div className='icon' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                  <a href='https://www.linkedin.com/in/gurshamsingh/' target='_blank' rel="noopener noreferrer"><i className="devicon-linkedin-plain"></i></a>
                </div>
                <div className='icon' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                  <a href='https://github.com/Gursham2001' target='_blank' rel="noopener noreferrer"><i className="devicon-github-original-wordmark"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact