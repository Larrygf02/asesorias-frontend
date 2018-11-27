import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Element, scroller } from 'react-scroll';
import Footer from '../components/commons/Footer';
import HeaderSeconds from '../components/commons/HeaderSeconds';
import { ROUTE } from '../resources/js/Constantes.js'

class RegistroCliente extends Component {
    state = {
        registroTarea: true,
        respuestas: false ,
        listaTareas: [
            {
                titulo:"Trigonometria",
                estado:"Terminado"
            },
            {
                titulo:"Lenguaje",
                estado:"Proceso"
            }
        ]
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

    handlerScroll = (params) => {
        console.log(params)
    }

    handlerCotizador = (url) => {
        console.log(url)
    }
    
    handlerSection = (value) => {
        if(value == 0){
            this.setState({
                registroTarea: true,
                respuestas: false 
            })
        }else if( value == 1){
            this.setState({
                registroTarea: false,
                respuestas: true 
            })
        }else {
            this.setState({
                registroTarea: true,
                respuestas: false 
            })
        }
    }


    render(){
        return(
            <Element name="registro">
                <HeaderSeconds handlerLanding={this.handlerLanding} />
                <section className="sectionRegistro" >
                    <h1 className="titleSomos">Bienvenido</h1>
                    <header className=" boxHomeCliente" style={{position:'relative'}}>                   

                        <nav className="nav-wrapperOptions bxHomeCliente">
                            <div className="nav-wrapper items ">
                                <p onClick={()=> this.handlerSection(0)}>Solicitud de Asesoria</p>
                                <p onClick={()=> this.handlerSection(1)}>Resultados</p>
                            </div>
                        </nav>

                        <div className="margenes"></div>

                        {this.state.registroTarea? 
                            <div>
                                
                                <section className="homeCliente">
                                    <h2 className="titleHome">Registro de Tareas</h2>
                                        <div className="row">
                                            <form className="col s12">
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    {/* <i className="material-icons prefix">account_circle</i> */}
                                                    <input id="icon_prefix" type="text" className="validate" />
                                                    <label htmlFor="icon_prefix">Direccion del Alumno</label>
                                                </div>
                                                <div className="input-field col s12">
                                                    {/* <i className="material-icons prefix">phone</i> */}
                                                    <input id="icon_telephone" type="text" className="validate" />
                                                    <label htmlFor="icon_telephone">Curso</label>
                                                </div>
                                                
                                                <div className="input-field col s12">
                                                    {/* <i className="material-icons prefix">phone</i> */}
                                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                                        <label htmlFor="textarea1">Descripción de la solicitud (Tarea)</label>
                                                </div>
                                               
                                            </div>

                                            <div className="btnregistro">
                                                <a className="btn waves-effect waves-light" >Registrar solicitud</a>
                                            </div>
                                            </form>
                                        </div>
                                    </section>
                            </div>: null}

                         {this.state.respuestas? 
                            <div>
                                <h2 className="titleHome">Resultados</h2>

                                {this.state.listaTareas?
                                    this.state.listaTareas.map((item, i)=>
                                        <div className="itemResultado" key={i}>
                                            <p className="boxItemResult">{item.titulo}</p>
                                            <p className="boxItemResult">{item.estado}</p>
                                        </div>
                                    )
                                : <div>VACIO</div>}
                            
                            </div>: null}

 <div className="margenes"></div>
 <div className="margenes"></div>
                        <div className="margenes"></div>
                       
                    </header>
                </section>
                <Footer />
            </Element>
        )
    }
}

export default RegistroCliente