import './Nav.css'

import devBase from '../assets/devBase.png'
import { Navigate, Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <img src={devBase} alt="" />
            <ul className="links">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/about">Sobre</Link></li>
            </ul>
        </nav>
    )
}

export default Nav