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
          <button className='link-btn'><Link /></button>
          <button className='github-btn'><Github /></button>
        </div>
      </div>
    </div>
  )
}