import React, { Component } from 'react';
//import { withRouter } from "react-router-dom"
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux';
import { Element, scroller } from 'react-scroll';
import Header from '../components/commons/Header'
import Home from '../components/commons/Home'
import Somos from '../components/commons/Somos'
import Footer from '../components/commons/Footer'
import Funciona from '../components/commons/Funciona'
import { ROUTE } from '../resources/js/Constantes.js'


class Landing extends Component {
	state = {
		
	}

	componentDidMount(){
		this.handlerScroll('header')
	}

    handlerCotizador = (URL) => {
		this.props.history.push({pathname : URL});
	}

    handlerScroll = (element) => {
		scroller.scrollTo(element, {
			duration: 800,
			delay: 0,
			smooth: "easeOutQuad"
		});
	}
	
	render() {		
		return (
			<div>
                <Element name="header">
                    <Header handlerScroll={this.handlerScroll}
                            handlerCotizador={this.handlerCotizador} />
                </Element>
                <Element name="home">
                    <Home handlerScroll={this.handlerScroll} />
                </Element>
                <Element name="somos">
                    <Somos handlerScroll={this.handlerScroll} />
                </Element>
				<Element name="funciona">
                    <Funciona 	handlerScroll={this.handlerScroll} 
								handlerCotizador={this.handlerCotizador} />
                </Element>
				<Footer />
            </div>           
		)
	}
}


export default Landing