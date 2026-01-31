import avatar from '../assets/avatar.jpg'

export default function Home(props){
  return(
    <div className='home-container'>
      <img className='home-img' src={avatar}></img>
      <h1 className="home-header">I build fast, user-friendly web experiences.</h1>
      <p className="home-para">Hi, I'm {props.name} - a Frontend Engineer who loves turning complex problems into simple, elegant interfaces. I enjoy building things that people actually use.</p>
    </div>
  )
}