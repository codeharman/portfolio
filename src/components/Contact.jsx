import { Linkedin, Github, Twitter, Youtube } from 'lucide-react'

export default function Contact(){
  return(
    <div className='contact-container'>
      <h2>Contact here</h2>
      <p className='para'>Let's build something great together.</p>
      <div className='contact-contents'>
        
        <p>Email: <a className='mailLink' href="mailto:iamsingh.hj@gmail.com">iamsingh.hj@gmail.com</a></p>
        <div className='contact-btns'>
          <button className='contact-btn'>
            <Linkedin color='#1B4B4B' strokeWidth={1}/> 
            <a href='https://www.linkedin.com/in/codeharman/' target='_blank'>LinkedIn</a>
          </button>
          <button className='contact-btn'>
            <Github color='#1B4B4B' strokeWidth={1}/>
            <a href='https://github.com/codeharman' target='_blank'>GitHub</a>
          </button>
          <button className='contact-btn'>
            <Twitter color='#1B4B4B' strokeWidth={1} />
            <a href='https://x.com/codeharmann' target='_blank'>Twitter / X</a>
          </button>
           <button className='contact-btn'>
            <Youtube color='#1B4B4B' strokeWidth={1} />
            <a href='https://www.youtube.com/@codeharman' target='_blank'>YouTube</a>
          </button>
        </div>
      </div>
    </div>
  )
}