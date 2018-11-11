import React from 'react'
import Banner from '../../resources/img/banner.png'

const Home = ({handlerScroll}) => (
    <section className="sectionHome">
        <img className="imgBannerHome" src={Banner} alt={Banner} />
    </section>
)

export default Home