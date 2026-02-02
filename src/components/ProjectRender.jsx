
import Projects from './Projects'
import ProjectData from '../ProjectsData'

export default function ProjectRender(){

  const allDataRender = ProjectData.map(res => (
    <Projects 
      key={res.id}
      {...res}
    />
  ))

  return (
    <div>
      <h2>Projects</h2>
      <p className='para'>Selected work featuring frontend projects, UI polish and performance.</p>
      {allDataRender}
    </div>
  )
}