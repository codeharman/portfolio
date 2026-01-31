import { Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact(){
  return(
    <div className='contact-container'>
      <h2>Contact here</h2>
      <p>Let's build something great together.</p>
      <div className='contact-contents'>
        <p>Email: <a href="mailto:iamsingh.hj@gmail.com">iamsingh.hj@gmail.com</a></p>
        <div className='contact-btns'>
          <button className='contact-btn'>
            <Linkedin color='#1B4B4B' strokeWidth={1}/> LinkedIn
          </button>
          <button className='contact-btn'>
            <Github color='#1B4B4B' strokeWidth={1}/>Github
          </button>
          <button className='contact-btn'>
            <Twitter color='#1B4B4B' strokeWidth={1} />Twitter / X
          </button>
        </div>
      </div>
    </div>
  )
}