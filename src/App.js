import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './resources/css/materialize.min.css'
import './resources/css/fonts.css';
import './resources/css/index.css';
import configureStore from './store/configureStore';
import Landing from './containers/Landing'
import Registro from './containers/RegistroCliente'
import { ROUTE } from './resources/js/Constantes.js'

require('materialize-js')


class App extends Component {
	render() {
		return (
			<div>
				<Router basename={ROUTE.URL_PATH}>
					<div>
						<Route exact path="/" render={() => (<Redirect to={ROUTE.URL_LANDING} />)} ></Route>
						<Route exact path={ROUTE.URL_LANDING} component={Landing} ></Route>
						<Route exact path={ROUTE.URL_REGISTRO} component={Registro} ></Route>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;

