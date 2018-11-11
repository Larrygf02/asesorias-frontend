import React from 'react'
import comofunciona from '../../resources/img/comofunciona.PNG'

const Funciona = ({handlerCotizador,handlerScroll}) => (
    <section className="sectionBannerFunciona" >       
        <h1 className="titleSomos">¿Cómo Funciona?</h1>
        <p className="detailSomos">Todo el proceso de compra se realiza online.</p> 
        <img src={comofunciona} />

        <div>
            <a className="btn waves-effect waves-light" onClick={handlerCotizador}  >Registrate</a>
        </div>
    </section>
)

export default Funciona