import React from 'react'
import "./Contact.scss"
import SectionNumber from "../../components/sectionNumber/sectionNumber"
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

function Contact() {
    return (
        <div id="contact" className="contact">
            
            <Controller>
                    <Scene
                        triggerElement="#contact"
                        duration={300}
                        indicators={false}
                        offset={-100}
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
                                <div style={{opacity: 0}}>
                                <SectionNumber number="03" title="Contact Me"/>
                                </div>
                            </Tween>
                            )}
                </Scene>
                <Scene
                        triggerElement="#contact"
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
                                <div className="contact__text" style={{opacity: 0}}>
                                    <h2>I am located in <span>Wokingham</span>, about <span>30 miles west of London</span>. You can <span>reach me via the following</span>:</h2>
                                    <a href="mailto:andrew.butler@deers-leap.com">andrew.butler@deers-leap.com</a>
                                    <a href="tel:07710126565">+44 710 126565</a>
                                    
                                </div>
                            </Tween>
                            )}
                        
                        
                    </Scene>
            </Controller>

            
            
            
            
        </div>
    )
}

export default Contact
