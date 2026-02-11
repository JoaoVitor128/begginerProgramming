import './Nav.css'

import beginner from '../assets/beginner.png'
import { Navigate, Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <img src={beginner
            
            } alt="" />
            <ul className="links">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/classes">Aulas</Link></li>
                <li><Link to="/about">Sobre</Link></li>
            </ul>
        </nav>
    )
}

export default Nav