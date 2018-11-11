import React, { Component } from 'react';
import Logo from '../../resources/img/logo.png'

class Footer extends Component {
	
	render() {
		return (
			<footer>
				<img src={Logo} alt="logo" />
				<p className="positionInlineBlock">Derechos de autor © 2018 AsesoriasRaulLuzLuna, Inc.</p>
				<ul className="right positionInlineBlock">
					<li>Condiciones</li>
					<li>Política de Privacidad y Política de Cookies</li>
					<li>Propiedad Intelectual</li>
				</ul>
			</footer>

		)
	}
}

export default Footer;
