import React from 'react'
import "./Who.scss"
import SectionNumber from "../../components/sectionNumber/sectionNumber"
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

function Who() {

 
    return (
        <div id="who" className="who">
            <Controller>
                <Scene
                    triggerElement="#who"
                    duration={300}
                    indicators={false}
                    offset={-100}
                >
                    
                    {(progress) => (
                        <Tween   
                            to={{
                            opacity: '1'
                            }}       
                            ease="none"
                            totalProgress={progress}
                            paused
                        >
                            <div style={{opacity: 0}}>
                            <SectionNumber number="01" title="Who am I?"/>
                            </div>
                        </Tween>
                        )}
                    
                    
                </Scene>
                <Scene
                    triggerElement="#who"
                    duration={300}
                    indicators={false}
                    offset={100}
                >
                    
                    {(progress) => (
                        <Tween            
                            to={{
                            opacity: '1',
                            }}       
                            ease="none"
                            totalProgress={progress}
                            paused
                        >
                            <div className="who__text" style={{opacity: 0}}>
                                <h2>I worked as an <span>analyst</span> at <span>Gartner</span> for over <span>20 years</span> before creating <span>Deers-Leap Insight</span> in 2018.
                                </h2>
                                <p>After joining as a Research Director in 1997, my focus on data centre technologies developed over the next two decades. Key achievements include:
                                </p>
                            </div>
                        </Tween>
                        )}
                    
                    
                </Scene>
                <Scene
                    triggerElement="#who"
                    duration={300}
                    indicators={false}
                    offset={500}
                >
                    
                    {(progress) => (
                        <Tween            
                            to={{
                            opacity: '1',
                            }}       
                            ease="none"
                            totalProgress={progress}
                            paused
                        >
                            <div className="who__bullets" style={{opacity: 0}}>
                            
                                <div className="who__bullets__bullet">
                                    <span className="who__bullets__bullet--number">
                                        <span className="bullet bullet1 layer" data-speed="1"></span>
                                        <span className="number"></span>
                                    </span>
                                    <p>Conference chair of the Cannes & Barcelona symposia for several years</p>
                                </div>
                                <div className="who__bullets__bullet">
                                <span className="who__bullets__bullet--number">
                                        <span className="bullet bullet3 layer" data-speed="1"></span>
                                        <span className="number"></span>
                                    </span>
                                    <p>Global insight achieved through regular participation in dozens of Gartner conferences all over the world</p>
                                </div>
                                <div className="who__bullets__bullet">
                                <span className="who__bullets__bullet--number">
                                        <span className="bullet bullet2 layer" data-speed="-1"></span>
                                        <span className="number"></span>
                                    </span>
                                    <p>Active, named participation in hundreds of other published reports</p>
                                </div>
                                <div className="who__bullets__bullet">
                                <span className="who__bullets__bullet--number">
                                        <span className="bullet bullet1 layer" data-speed="-1"></span>
                                        <span className="number"></span>
                                    </span>
                                    <p>Conference chair of the London Data Center Summit since its inception in 2007 through 2016</p>
                                </div>
                                <div className="who__bullets__bullet">
                                <span className="who__bullets__bullet--number">
                                        <span className="bullet bullet3 layer" data-speed="1"></span>
                                        <span className="number"></span>
                                    </span>
                                    <p>Primary authorship of over 300 published reports, including dozens of Magic Quadrants</p>
                                </div>
                                <div className="who__bullets__bullet">
                                <span className="who__bullets__bullet--number">
                                        <span className="bullet bullet2 layer" data-speed="-1"></span>
                                        <span className="number"></span>
                                    </span>
                                    <p>Lead analyst roles for Hewlett-Packard, Cisco, Red Hat and Dell</p>
                                </div>
                                
                            </div>
                        </Tween>
                        )}
                    
                    
                </Scene>
                <Scene
                    triggerElement="#who"
                    duration={300}
                    indicators={false}
                    offset={1150}
                >
                    
                    {(progress) => (
                        <Tween
                            to={{
                            opacity: '1',
                            }}       
                            ease="none"
                            totalProgress={progress}
                            paused
                        >
                            <div className="who__beforeGartner" style={{opacity: 0}}>
                                <h2><span>Before</span> Gartner…</h2>
                                    <p>Prior to joining Gartner in 1997, I worked for Hewlett-Packard in both the UK and Germany for 14 years. After joining as a systems engineer in 1983, I held a number of software and hardware marketing positions, and as sales training manager for Europe. Before 1983, I underwent a classic programming, systems analysis and IT management “apprenticeship”, working for both software vendors (Pentagram, Altergo) and large corporations (Nielsen Research, Schwarzkopf and Boehringer Ingelheim).</p>
                                </div>
                        </Tween>
                        )}
                    
                    
                </Scene>
            </Controller>
                        
        </div>
    )
}

export default Who
