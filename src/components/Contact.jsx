import { Linkedin, Github, Twitter, Youtube } from 'lucide-react'

export default function Contact(){
  return(
    <div className='contact-container'>
      <h2>Contact here</h2>
      <p className='para'>Let's build something great together.</p>
      <div className='contact-contents'>
        
        <p>Email: <a className='mailLink' href="mailto:iamsingh.hj@gmail.com">iamsingh.hj@gmail.com</a></p>
        <div className='contact-btns'>
          <a href='https://www.linkedin.com/in/codeharman/' target='_blank'>
            <button className='contact-btn'>
              <Linkedin color='#1B4B4B' strokeWidth={1}/> LinkedIn
            </button>
          </a>
          <a href='https://github.com/codeharman' target='_blank'>
            <button className='contact-btn'>
              <Github color='#1B4B4B' strokeWidth={1}/> GitHub
            </button>
          </a>
          <a href='https://x.com/codeharmann' target='_blank'>
            <button className='contact-btn'>
              <Twitter color='#1B4B4B' strokeWidth={1} /> Twitter / X
            </button>
          </a>
          <a href='https://www.youtube.com/@codeharman' target='_blank'>
            <button className='contact-btn'>
              <Youtube color='#1B4B4B' strokeWidth={1} />YouTube
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}