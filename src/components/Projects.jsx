import React from 'react'
import {Link, Github} from 'lucide-react'
import ProjectsData from '../ProjectsData'

export default function Projects(props){

  return(
    <div>
      <div className='project-main-div'>
        <div className='project-para'>
          <p className='para-heading'>{props.title}</p>
          <p className='para-para'>{props.techStack}</p>
        </div>
        <div>
          <a href={props.projectUrl} target='_blank'>
            <button className='link-btn'>
              <Link color='#1B4B4B' size={16} strokeWidth={1.5}/>
            </button>
          </a>
          <a href={props.githubUrl} target='_blank'>
            <button className='github-btn'>
              <Github color='#1B4B4B' size={16} strokeWidth={1.5}/>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}