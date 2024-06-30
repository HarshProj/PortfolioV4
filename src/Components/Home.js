import React, { useCallback, useEffect, useRef } from 'react'
import '../CSS/Home.css'
import {Skills} from './Skills'
import githublogo from '../Assets/github.png'
import { Work } from './Work'
import { Contact } from './Contact'
export const Home = (props) => {
    const ref=useRef()
        useEffect(() => {
            const onScroll = () => {
                const scrollCheck = window.scrollY < 10
                if (scrollCheck) {
                    console.log(1)
                }
            }
        }, [])
        const onTabDefault1Click = useCallback(() => {
            const anchor = document.querySelector(
              "[data-scroll-to='projectsContainer']"
            );
            if (anchor) {
              anchor.scrollIntoView({ block: "start", behavior: "smooth" });
            }
          }, []);
    return (
        <>  
                <div className="cursor"></div>
            <div className="home-box">
                <div className="intro-sec">
                    <div className="intro-div">
                        <span className='greet'>Hey there ,my name is</span>
                        <h1>Harsh Chauhan</h1>
                        <h1 className='field'>I am a web Developer</h1>
                        <p>I leverage cutting-edge technologies to craft robust and dynamic web experiences.  I am proficient in various frameworks and possess a keen eye for clean, maintainable code. </p>
                    </div>
                </div>
                    <hr className='hr'/>

                    <div className="about-me" data-scroll-to='projectsContainer' id='about'>
                        <div id="absec"className="about-section">
                            <div className="about-h1"><h1 className=''>About-me
                            </h1> <hr className='about-hr'/></div>
                        
                        <p>Myself Harsh Chauhan, a dedicated full stack web developer currently in my third year of B-Tech at KNIT Sultanpur. I specialize in building comprehensive web applications with proficiency in both front-end and back-end technologies.</p>
                        </div>
                    </div>
                    <hr className='hr'></hr>
                        <Skills />
                        <Work to={props.to}/>
                        <Contact/>
            </div>
            <hr />
            <div className="contact-handles" >
                <h1 className='contact-h1'>Contact Handles</h1>
                <ul className='contact-ul' id='handles'>
                    <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" target='_blanck' class="social-link"><img src="https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/60f17a27f09c3f1f0df7ef59_icon%20(1).svg" loading="lazy" alt="LinkedIn logo" /></a>
                    </li>
                    <li> <a href="https://instagram.com/hharshchauhan1?igshid=ZDdkNTZiNTM=" target='_blanck' class="social-link"><img src="https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/60f17a27f09c3f768ef7ef57_icon%20(3).svg" loading="lazy" alt="Instagram logo" /></a></li>

                    <li><a href="https://github.com/HarshProj" class="social-link git" target='_blanck'><img className='github' src={githublogo} loading="lazy" /></a></li>

                    <li><a href="https://x.com/HarshChauh84647" class="social-link" target='_blanck'><img src="https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/60f17a27f09c3fa670f7ef56_icon%20(4).svg" loading="lazy" alt="Twitter logo" /></a></li>
                </ul>
                
                    <div className="vertical-line">
                        <div className="vr"></div>
                    </div>
                </div>
                <div className="contact-handles email">
                <ul class="mail-handle" >
                    
                    <li >
                        <a href="/" id='emailhandle' ref={ref}>hharshchauhan1@gmail.com</a>
                        </li>
                </ul>
                
                    <div className="vertical-line">
                        <div className="vr"></div>
                    </div>
                </div>
        </>
    )
}
