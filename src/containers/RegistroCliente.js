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

     handlerLanding = () => {
		this.props.history.push({pathname : ROUTE.URL_LANDING});
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
                    <h1 className="titleSomos">Registrate con Nosotros</h1>
                    <div className="row">
                        <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" className="validate" />
                                <label htmlFor="icon_prefix">Nombre Completo</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">phone</i>
                                <input id="icon_telephone" type="tel" className="validate" />
                                <label htmlFor="icon_telephone">Telefono</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">email</i>
                                <input id="email" type="email" className="validate" />   
                                <label htmlFor="email">Correo</label>
                            </div>
                             <div className="input-field col s12">
                                <i className="material-icons prefix">vpn_key</i>
                                <input id="password" type="password" className="validate" />
                                <label htmlFor="password">Contraseña</label>
                            </div>
                        </div>

                        <div className="btnregistro">
                            <a className="btn waves-effect waves-light" >Regristrarse</a>
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