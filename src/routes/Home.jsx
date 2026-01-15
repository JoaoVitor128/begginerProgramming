import './Home.css'

import jsImg from '../assets/js.png'
import { Link } from 'react-router-dom'

import ClassList from '../components/ClassList'

const Home = () => {
  return (
    <div className="home">
      <header>
        <div className="headerContent">
          <img src={jsImg} alt="" />
          <h1>Aprenda <span>Java Script</span> do ZERO ou aprimore seu conhecimento na área e alcance melhores vagas</h1>
          <Link to="https://discord.gg/SrBuscKvyU"><button>Entre na Guilda</button></Link>
        </div>
      </header>
      <section>
        <div className="homeContent">
        <ClassList/>
        </div>
      </section>
    </div>
  )
}

export default Home