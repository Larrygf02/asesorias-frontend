import React from 'react'
import Logo from '../../resources/img/logo.png'

const Header = ({handlerCotizador,handlerScroll}) => (
    <header className="headerLanding">
       <nav>
            <div className="nav-wrapper">
                <a className="brand-logo">
                    <img className="LogoHeader" src={Logo} alt="Logo" />
                </a>
                <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="listaHeader right hide-on-med-and-down">
                    <li><a onClick={()=> handlerScroll('home') }>Conocenos</a></li>
                    <li><a onClick={()=> handlerScroll('somos') }>Quienes Somos</a></li>
                    <li><a onClick={()=> handlerScroll('funciona') }>Como Funciona</a></li>
                    <li><a className="btn waves-effect waves-light" onClick={handlerCotizador} >Registrate</a></li>
                </ul>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li><a onClick={()=> handlerScroll('home') }>Conocenos</a></li>
            <li><a onClick={()=> handlerScroll('somos') }>Quienes Somos</a></li>
            <li><a onClick={()=> handlerScroll('funciona') }>Como Funciona</a></li>
            <li><a className="btn waves-effect waves-light" onClick={handlerCotizador}  >Registrate</a></li>
        </ul>        
    </header>
)

export default Header