import React from 'react'
import "./Hero.scss"
import Profile from "../../images/about-photo.jpg"
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


function Hero() {

 


    
    return (
        <div id="hero" className="hero">

            <Controller>
                <Scene
                    triggerElement="#who"
                    duration={300}
                    indicators={false}
                    offset={-250}
                    pin
                >
                    
                    {(progress) => (
                        <Tween            
                            to={{
                            opacity: '0',
                            }}       
                            ease="none"
                            totalProgress={progress}
                            paused
                        >
                            <div className="hero__text">
                                <h1><span>Expert insight</span> into the ways that <span>IT&nbsp;industry analysts</span> perform their role.</h1>
                                <a href="#who">Find out more</a>
                            </div>
                        </Tween>
                        )}
                    
                    
                </Scene>
                <Scene
                    triggerElement="#who"
                    duration={300}
                    indicators={false}
                    offset={-250}
                    pin
                >
                    
                    {(progress) => (
                        <Tween            
                            to={{
                            opacity: '0',
                            top: '100px'
                            }}       
                            ease="none"
                            totalProgress={progress}
                            paused
                        >
                            <div className="hero__image">
                                <div className="hero__image--triangle">
                                    <img src={Profile} alt="Photo of Andrew Butler from Deers Leap Insight" className="layer"  data-speed="1"/>
                                </div>
                            </div>
                        </Tween>
                        )}
                    
                    
                </Scene>
            </Controller>

            {/* <div className="hero__text">
                <h1><span>Expert insight</span> into the ways that <span>IT industry analysts</span> perform their role.</h1>
                <a href="#who">Find out more</a>
            </div> */}
            {/* <div className="hero__image">
                <div className="hero__image--triangle">
                    <img src={Profile} alt="Andrew Butler" className="layer"  data-speed="1"/>
                </div>
            </div> */}
        </div>
    )
}

export default Hero
