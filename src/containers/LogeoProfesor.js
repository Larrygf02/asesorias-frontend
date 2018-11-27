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
    handlerSubmit = (e) => {
        const { correo, password } = this.state
        fetch(`http://localhost:4000/profesor/login?correo=${correo}&password=${password}`)
            .then(response => response.json())
            .then(json => {
                const { data } = json
                if (data.length > 0){
                    console.log('logeado')
                }else{
                    console.log('No se pudo loguear')
                }
            })
            .catch(err => console.err(err)) 
    }

    logChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
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
                    <p>¡Unete y enseña con nosotros!</p>
                    <h1 className="titleSomos">Iniciar Sesión</h1>
                    <div className="row">
                        <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" onChange={this.logChange} className="validate" name="correo"/>
                                <label htmlFor="icon_prefix">Correo</label>
                            </div>
                             <div className="input-field col s12">
                                <i className="material-icons prefix">vpn_key</i>
                                <input id="password" type="password" onChange={this.logChange} className="validate" name="password"/>
                                <label htmlFor="password">Contraseña</label>
                            </div>
                        </div>

                        <div className="btnregistro">
                            <a className="btn waves-effect waves-light" onClick={this.handlerSubmit}>Entrar</a>
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