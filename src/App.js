import React, { Component } from 'react';
//import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './resources/css/materialize.min.css'
import './resources/css/fonts.css';
import './resources/css/index.css';
//import configureStore from './store/configureStore';
import Landing from './containers/Landing'
import RegistroAlumno from './containers/RegistroCliente'
import RegistroProfesor from './containers/RegistroProfesor'
import LoginAlumno from './containers/LogeoCliente'
import LoginProfesor from './containers/LogeoProfesor'
import HomeAlumno from './containers/HomeAlumno'
import { ROUTE } from './resources/js/Constantes.js'

require('materialize-js')


class App extends Component {
	render() {
		/*ROUTE.URL_PATH*/ 
		return (
			<div>
				<Router basename={ROUTE.URL_PATH}>
					<div>
						<Route exact path="/" render={() => (<Redirect to={ROUTE.URL_LANDING} />)} ></Route>
						<Route exact path={ROUTE.URL_LANDING} component={Landing} ></Route>
						<Route exact path={ROUTE.URL_REGISTRO_ALUMNO} component={RegistroAlumno} ></Route>
						<Route exact path={ROUTE.URL_REGISTRO_PROFESOR} component={RegistroProfesor} ></Route>
						<Route exact path={ROUTE.URL_LOGIN_ALUMNO} component={LoginAlumno} ></Route>
						<Route exact path={ROUTE.URL_LOGIN_PROFESOR} component={LoginProfesor} ></Route>
						<Route exact path={ROUTE.URL_HOME_ALUMNO} component={HomeAlumno} ></Route>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;

