import React from 'react'
import "./nav.scss"
import LogoDL from "../../images/logo-blue.svg"
import LogoI from "../../images/logo-insight.svg"
import Scrollspy from 'react-scrollspy'



function Nav() {



    return (
        <div className="navbar">
            <div className="navbar__inner">
                
            <div className="navbar__logo">
                <a href="#">
                <span><img src={LogoDL} alt="Deers-Leap"/></span>
                <span className="navbar__logo--insight"><img src={LogoI} alt="Insight"/></span>
                </a>
            </div>
            
            <Scrollspy offset={80} className="navbar__links" items={ ['who', 'how', 'contact'] } currentClassName="is-current">
                <li><a href="#who">Who am I?</a></li>
                <li><a href="#how">How can i help?</a></li>
                <li className="mobile-visible"><a href="#contact">Contact me</a></li>
            </Scrollspy>
            
            </div>
        </div>
    )
}

export default Nav
