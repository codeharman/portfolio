import { Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact(){
  return(
    <div>
      <p>Contact here</p>
      <p>Let's build something great together.</p>
      <div>
        <p>Email: <a href="mailto:iamsingh.hj@gmail.com">iamsingh.hj@gmail.com</a></p>
        <div>
          <button><Linkedin /> @codeharman</button>
          <button><Github />@codeharman</button>
          <button><Twitter />@codeharmann</button>
        </div>
      </div>
    </div>
  )
}