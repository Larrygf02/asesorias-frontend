import React from 'react'
import QuienesSomos from '../../resources/img/quienessomos.png'

const Somos = ({handlerScroll}) => (
    <section className="sectionBannerSomos">
        <h1 className="titleSomos">Quienes Somos</h1>
        <p className="detailSomos">Somos una plataforma digital que se ofrece como medio para que los estudiantes puedan obtener asesorias de forma inmediata sobre los temas de su preferencia. Contamos con una forma de pago efectivamente segura y un medio en el cual el estudiante se podra sentir seguro y solo se preocupara por aprender</p>
        <img className="imgBannerSomos" src={QuienesSomos} />
    </section>
)

export default Somos