import React from 'react'
import Logo from '../../resources/img/logo.png'

const HeaderSeconds = ({handlerLanding}) => (
    <header className="headerLanding">
       <nav>
            <div className="nav-wrapper">
                <a className="brand-logo">
                    <img className="LogoHeader" src={Logo} alt="Logo" />
                </a>
                <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="listaHeader right hide-on-med-and-down">
                   
                    <li className="right btnHeaderSecond"  ><a className="btn waves-effect waves-light" onClick={handlerLanding} >Regresar Home</a></li>
                </ul>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li><a className="btn waves-effect waves-light" onClick={handlerLanding}  >Regresar Home</a></li>
        </ul>        
    </header>
)

export default HeaderSeconds