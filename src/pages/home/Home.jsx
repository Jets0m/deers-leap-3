import React from 'react'
import Contact from '../../sections/contact/Contact'
import Footer from '../../sections/footer/Footer'
import Hero from '../../sections/hero/Hero'
import How from '../../sections/how/How'
import Who from '../../sections/who/Who'
import "./Home.scss"

function Home() {
    return (
        <div className="main">
            <Hero/>
            <Who/>
            <How/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
