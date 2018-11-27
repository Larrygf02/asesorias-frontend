import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Element, scroller } from 'react-scroll';
import Footer from '../components/commons/Footer';
import HeaderSeconds from '../components/commons/HeaderSeconds';
import { ROUTE } from '../resources/js/Constantes.js'

class RegistroCliente extends Component {
    state = {
        nombreCompleto  :   '',
        correo          :   '',
        password        :   '',
    }

     handlerHomeAlumno = () => {
		this.props.history.push({pathname : ROUTE.URL_HOME_ALUMNO});
	}

    componentDidMount(){
        scroller.scrollTo('registro', {
			duration: 800,
			delay: 0,
			smooth: "easeOutQuad"
		});
    }


    render(){
        return(
            <Element name="registro">
                <HeaderSeconds handlerLanding={this.handlerLanding} />
                <section className="sectionRegistro">
                <p>¡Aprende con nosotros!</p>
                    <h1 className="titleSomos">Iniciar Sesión</h1>
                    <div className="row">
                        <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" className="validate" />
                                <label htmlFor="icon_prefix">Usuario</label>
                            </div>
                             <div className="input-field col s12">
                                <i className="material-icons prefix">vpn_key</i>
                                <input id="password" type="password" className="validate" />
                                <label htmlFor="password">Contraseña</label>
                            </div>
                        </div>

                        <div className="btnregistro">
                            <a className="btn waves-effect waves-light" onClick={this.handlerHomeAlumno} >Entrar</a>
                        </div>
                        </form>
                    </div>
                </section>
                <Footer />
            </Element>
        )
    }
}

export default RegistroCliente