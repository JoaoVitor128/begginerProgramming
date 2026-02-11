import './Home.css'

import jsImg from '../assets/js.png'
import { Link } from 'react-router-dom'

import ClassList from './ClassList'

const Home = () => {
  return (
    <div className="home">
      <header>
        <div className="headerContent">
          <img src={jsImg} alt="" />
          <h1>Aprenda <span>Java Script</span> do ZERO ou aprimore seu conhecimento na área e alcance melhores vagas</h1>
          <Link to="https://discord.gg/KAWyEu7H"><button><span>Acessar</span> gratuitamente</button></Link>
          <p>100% gratuito • Acesso imediato</p>
        </div>
      </header>
    </div>
  )
}

export default Home