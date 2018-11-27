import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Element, scroller } from 'react-scroll';
import Footer from '../components/commons/Footer';
import HeaderSeconds from '../components/commons/HeaderSeconds';
import { ROUTE } from '../resources/js/Constantes.js'

class RegistroCliente extends Component {
    state = {
        nombre          :   '',
        correo          :   '',
        telefono        :   '',
        password        :   '',
    }

     handlerLanding = () => {
		this.props.history.push({pathname : ROUTE.URL_LANDING});
    }
    handlerSubmit = () => {
        const { nombre, correo, telefono ,password } = this.state
        //console.log(this.state)
        fetch(`http://localhost:4000/profesor/add?nombre=${nombre}&correo=${correo}&telefono=${telefono}&password=${password}`)
            .then(response => {
                if (response.status === 200){
                    console.log('Profesor agregado')
                    this.props.history.push({pathname : ROUTE.URL_LOGIN_PROFESOR});
                    //this.setState({nombre: '', correo: '', telefono: '', password: ''})
                } 
            })
            .catch(err => console.err(err))
        //console.log(correo)

    }

    logChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
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
                    <h1 className="titleSomos">Registrate con nosotros y enseña</h1>
                    <div className="row">
                        <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" onChange={this.logChange} className="validate" name="nombre"/>
                                <label htmlFor="icon_prefix">Nombre Completo</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">phone</i>
                                <input id="icon_telephone" type="tel" onChange={this.logChange} className="validate" name="telefono"/>
                                <label htmlFor="icon_telephone">Telefono</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">email</i>
                                <input id="email" type="email" onChange={this.logChange} className="validate" name="correo"/>   
                                <label htmlFor="email">Correo</label>
                            </div>
                             <div className="input-field col s12">
                                <i className="material-icons prefix">vpn_key</i>
                                <input id="password" type="password" onChange={this.logChange} className="validate" name="password"/>
                                <label htmlFor="password">Contraseña</label>
                            </div>
                        </div>

                        <div className="btnregistro">
                            <a className="btn waves-effect waves-light" onClick={this.handlerSubmit}>Regristrarse</a>
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