import React from 'react'
import Logo from '../../resources/img/logo.png'
import { ROUTE } from '../../resources/js/Constantes.js'

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
                </ul>
            </div>
        </nav>
        {/* <nav className="nav-wrapperTitle">
            <div className="nav-wrapper">
                <h3>Registrate</h3>
            </div>
        </nav> */}
        <nav className="nav-wrapperOptions">
            <div className="nav-wrapper items">
                <p onClick={()=> handlerCotizador(ROUTE.URL_REGISTRO_PROFESOR)}>Registro de Profesores</p>
                <p onClick={()=> handlerCotizador(ROUTE.URL_REGISTRO_ALUMNO)}>Registro de Alumnos</p>
            </div>
        </nav>

        {/* <nav className="nav-wrapperTitle">
            <div className="nav-wrapper">
                <h3>Iniciar Sesión</h3>
            </div>
        </nav> */}
        <nav className="nav-wrapperOptions">
            <div className="nav-wrapper items">
                <p onClick={()=> handlerCotizador(ROUTE.URL_LOGIN_PROFESOR)}>Inicia Profesores</p>
                <p onClick={()=> handlerCotizador(ROUTE.URL_LOGIN_ALUMNO)}>Inicia Alumnos</p>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li><a onClick={()=> handlerScroll('home') }>Conocenos</a></li>
            <li><a onClick={()=> handlerScroll('somos') }>Quienes Somos</a></li>
            <li><a onClick={()=> handlerScroll('funciona') }>Como Funciona</a></li>
        </ul>        
    </header>
)

export default Header