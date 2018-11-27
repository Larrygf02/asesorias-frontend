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
                    <h1 className="titleSomos">Bienvenido</h1>
                    
                </section>
                <Footer />
            </Element>
        )
    }
}

export default RegistroCliente