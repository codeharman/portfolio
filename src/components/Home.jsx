import avatar from '../assets/avatar.jpg'
import {File} from 'lucide-react'

export default function Home(props){
  return(
    <div className='home-container'>
      <img className='home-img' src={avatar}></img>
      <h1 className="home-header">I build fast, user-friendly web experiences.</h1>
      <p className="para">Hi, I'm <span>{props.name}</span> - a <span>Frontend Engineer</span> who loves turning <span>complex problems</span> into simple, elegant interfaces. I enjoy <span>building things</span> that people actually use.</p>
      <div className='resume'>
        <p className='resume-text'>You can find my resume</p>
        <div><File color='#297070' size={24} /></div>
        <a className='resume-a'><span>here</span></a>
      </div>
    </div>
  )
}