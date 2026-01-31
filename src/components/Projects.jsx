import {Link, Github} from 'lucide-react'

export default function Projects(props){
  return(
    <div>
      <h2>Projects</h2>
      <p>Selected work featuring frontend projects, UI polish and performance</p>
      <div className='project-main-div'>
        <div className='project-para'>
          <p>{props.projectName}</p>
          <p>{props.techStack}</p>
        </div>
        <div>
          <button className='link-btn'>
            <Link color='#1B4B4B' size={16} strokeWidth={1.5}/>
          </button>
          <button className='github-btn'>
            <Github color='#1B4B4B' size={16} strokeWidth={1.5}/>
          </button>
        </div>
      </div>
    </div>
  )
}