import React from 'react';
import '../Estilos/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={Logo} />
                <div className= 'hiddenLinks'>
                <Link to='/'> Inicio </Link>
                <Link to='/menu'> Menu </Link>
                <Link to='/about'> Acerca </Link>
                <Link to='/contact'> Contacto </Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to='/'> Inicio </Link>
                <Link to='/menu'> Menu </Link>
                <Link to='/about'> Acerca </Link>
                <Link to='/contact'> Contacto </Link>
                <button>
                <ReorderIcon/>
                </button>
            </div>
        </div>
    )
}

export default Navbar
