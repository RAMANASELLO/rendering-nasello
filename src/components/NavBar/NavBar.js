import logo from '../../logo.svg'
import CartWidget from '../CartWidget/CartWidget'
import './styles.css'   
import { BiCart } from 'react-icons/bi';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar-container'>

        <div>
            <Link to="/"><img width={'100px'} src={logo} alt="logo"/></Link>
        </div>

        <div>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                   
                </li>

                <li>
                   <Link to="/contacto">Contacto</Link>
                </li>

                <li>
                   <Link to='/productos/pelota'>Pelota</Link>
                </li>

                <li>
                   <Link to='/productos/gorra'>Gorra</Link>
                </li>

                <li>
                   <Link to='/productos/guante'>Guantes</Link>
                </li>

            </ul>

        </div>

        <div>
            <Link to='/cart'>
                <h3><BiCart/></h3>
            </Link>
        </div>

    </div>
  )
}

export default NavBar