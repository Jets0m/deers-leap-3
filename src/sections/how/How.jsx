import React from 'react'
import "./How.scss"
import SectionNumber from "../../components/sectionNumber/sectionNumber"
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


function How() {
    return (
        <div id="how" className="how">

                <Controller>
                    <Scene
                        triggerElement="#how"
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
                                <SectionNumber number="02" title="How can i help?"/>
                                </div>
                            </Tween>
                            )}
                        
                        
                    </Scene>
                    <Scene
                        triggerElement="#how"
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
                                <div className="how__text" style={{opacity: 0}}>
                                    <h2>This differentiated <span>insight</span> provides me with the scope to <span>deliver consultancy value</span> on two very different axes:</h2>
                                </div>
                            </Tween>
                            )}
                        
                        
                    </Scene>
                </Controller>
            
            
            
            
            
            
            
            <div id="how__bullets" className="how__bullets">

                <Controller >
                    <Scene
                        triggerElement="#how__bullets"
                        duration={300}
                        indicators={false}
                        offset={-200}
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
                                 <div className="how__bullets__bullet"  style={{opacity: 0}}>
                                    <span className="how__bullets__bullet--number">
                                        <span className="bullet bullet1 layer" data-speed="1"></span>
                                        <span className="number"></span>
                                    </span>
                                    <div className="text">
                                    <h2><span>Supercharging analyst engagement</span></h2>
                                    <p>In this capacity, I work exclusively through <a href="https://theskillsconnection.com/" target="_blank" rel="noopener noreferrer">The Skills Connection</a>, who are a team of former senior Gartner analysts and executives offering knowledge and expertise to help technology companies improve their relationships with the analyst community and better engage with the market. The Skills Connection works as an extension to the vendor’s own analyst relations and marketing teams to help prepare for analyst assessments, deliver briefings and increase the probability of marketing and sales engagement success. In this capacity, the Skills Connection analysts deliver three key attributes:</p>
                                    <ul>
                                        <li>We understand what the analysts want to see, because we were all senior analysts ourselves.</li>
                                        <li>We know the best way for vendors to present themselves to make their company stand out with analysts and prospects.</li>
                                        <li>And we advise vendors on what information they need to share, at what time and in what format, in order to minimize disruption to the business.</li>
                                    </ul>
                                    </div>
                                </div>
                            </Tween>
                            )}
                    </Scene>
                    <Scene
                        triggerElement="#how__bullets"
                        duration={300}
                        indicators={false}
                        offset={250}
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
                                 <div className="how__bullets__bullet" style={{opacity: 0}}>
                                    <span className="how__bullets__bullet--number">
                                            <span className="bullet bullet2 layer" data-speed="-1"></span>
                                            <span className="number"></span>
                                        </span>
                                        <div className="text">
                                        <h2><span>Analyzing the market</span></h2>
                                        <p>Twenty plus years as an analyst qualifies me to advise vendors in a variety of additional ways:</p>
                                        <ul>
                                            <li>Analyst contact is usually fleeting – you can’t do much in 30 minutes! I provide context to analyst interactions, to help vendors “analyze the analyst”, their message and the market dynamics.</li>
                                            <li>I work with major IT hardware and software vendors to be a sounding board for their own strategic initiatives.</li>
                                            <li>Through either one-off commissions, or a recurring relationship, Deers-Leap becomes a natural extension to a vendor’s own marketing or analyst relations organization.</li>
                                            <li>Principal coverage areas include server technologies and operating systems, evolution of cloud computing, data center technology integration, hyperconvergence and software-defined infrastructures.</li>
                                        </ul>
                                        </div>
                                    </div>  
                            </Tween>
                            )}
                    </Scene>
                </Controller>
            </div>

            <Controller >
                <Scene
                    triggerElement="#how__bullets"
                    duration={300}
                    indicators={false}
                    offset={850}
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
                                 <div className="how__skillsConnection" style={{opacity: 0}}>
                                    <h2><span>More information</span> about the ways that <span>The&nbsp;Skills&nbsp;Connection</span> can <span>help your business</span> can be found at: </h2>
                                    <a href="https://theskillsconnection.com/" target="_blank">www.theskillsconnection.com</a>
                                </div>
                            </Tween>
                            )}
                </Scene>
            </Controller>
            
            
            
        </div>
    )
}

export default How
