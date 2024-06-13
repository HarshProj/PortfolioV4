import React, { useEffect } from 'react'
import '../CSS/Work.css'
import githublogo from '../Assets/github.png'
import p1 from '../Assets/arczone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/fontawesome-free-solid'
import p2 from '../Assets/text.PNG'
export const Work = (props) => {
useEffect(()=>{
  if(props.to){
    document.getElementsByClassName('project-desc')[0].style.backgroundColor='#0A192F';
    document.getElementsByClassName('des')[0].style.backgroundColor='#0A192F';
    }
    else{
      document.getElementsByClassName('project-desc')[0].style.backgroundColor='#ffff';
      document.getElementsByClassName('des')[0].style.backgroundColor='#ffff';
  }
},[props.to])
  return (
   <>
   <div className="work-box">
    <div className="work-section">

   <div className="about-h1"><h1>Some Things I've Built</h1><hr className='about-hr'/></div>
   <div className="project">
    <div className="img-div">
      <img src={p1} alt="" className='img-project'/>
    </div>
    <div className="project-info">
      <div className="project-title">
        <p>Featured Project </p>
        <h1>Arc Zone</h1>
      </div>
      <div className="source-code">
       <div className="tech-used">
        <p>React</p>
        <p>MongoDB</p>
        <p>Nodejs</p>
        <p>Express</p>
       </div>
       <div className="go-through">
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>

       </div>
      </div>
    </div>
      <div className="project-desc">
      A full-stack e-commerce website designed for seamless online clothing purchases. Offers a comprehensive and user-centric e-commerce solution for online clothing retailers, built with cutting-edge technologies that prioritize performance, security, and scalability.
      </div>
      
   </div>
   <div id ="pp1"className="project p1">
   
    <div className="project-info pi">
      <div className="project-title project-title-p2">
        <p>Featured Project </p>
        <h1>Inotebook</h1>
      </div>
      <div className="source-code">
       <div className="tech-used tech-used-p2">
        <p>React</p>
        <p>MongoDB</p>
        <p>Nodejs</p>
        <p>Express</p>
       </div>
       <div className="go-through go-through-p2">
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>

       </div>
      </div>
    </div>
      <div className=" des">
      This innovative to-do list application empowers users to conquer their daily tasks with a feature-rich and user-friendly interface.  Built with a focus on efficiency and organization.
      </div>
      <div className="img-div i1">
      <img src={p2} alt="" className='img-project'/>
    </div>
   </div>
   <div className="about-h1"><h1>Other Noteworthy Projects</h1> <hr className='about-hr'/>
   </div>
   
   <div className="small-projects">
   <div className="project-card" onClick={()=>{window.open("http://google.com", "_blank");}}><div className="project-folder">
      <div className="folder"><FontAwesomeIcon icon={faFolder} style={{width:'100%',height:"100%"}} /></div>
      
      <div className="folder-urls"><div id='mip' className="go-through mp">
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>

       </div></div>
      </div>
    <div className='project-details'>
      <h3 className='project-link'>
        <a href="https://google.com" target='_blank'>Authentication</a>
      </h3>
      <p>
      This Authentication App ensures secure user authentication and email verification. It efficiently manages user details using a modern tech stack.
      </p></div>
    <div className="te1">
        <span>Vite js</span>
        <span>MongoDB</span>
        <span>Nodejs</span>
        <span>Express</span>
       </div></div>
    <div className="project-card" onClick={()=>{window.open("http://google.com", "_blank");}}><div className="project-folder">
      <div className="folder"><FontAwesomeIcon icon={faFolder} style={{width:'100%',height:"100%"}} /></div>
      
      <div className="folder-urls"><div id='mip'  className="go-through mp">
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>

       </div></div>
      </div>
    <div className='project-details'>
      <h3 className='project-link'>
        <a href="https://google.com" target='_blank'>Blog App</a>
      </h3>
      <p>
      This Blog App allows users to securely create, read, update, and delete blog posts, upload content, and interact with others, offering a robust platform for content sharing.
      </p></div>
    <div className="te1">
        <span>React</span>
        <span>MongoDB</span>
        <span>Nodejs</span>
        <span>Express</span>
       </div></div>
       <div className="project-card" onClick={()=>{window.open("http://google.com", "_blank");}}><div className="project-folder">
      <div className="folder"><FontAwesomeIcon icon={faFolder} style={{width:'100%',height:"100%"}} /></div>
      
      <div className="folder-urls"><div id='mip'  className="go-through mp">
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>

       </div></div>
      </div>
    <div className='project-details'>
      <h3 className='project-link'>
        <a href="https://google.com" target='_blank'>FreeCode</a>
      </h3>
      <p>
      This Code Compiler and Problem-Solving App enables users to write, compile, and run code in multiple programming languages.
      </p></div>
    <div className="te1">
        <span>React</span>
        <span>codemirror</span>
        <span>JS</span>
       </div></div>
    <div className="project-card" onClick={()=>{window.open("http://google.com", "_blank");}}><div className="project-folder">
      <div className="folder"><FontAwesomeIcon icon={faFolder} style={{width:'100%',height:"100%"}} /></div>
      
      <div className="folder-urls"><div id='mip'  className="go-through mp">
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>

       </div></div>
      </div>
    <div className='project-details'>
      <h3 className='project-link'>
        <a href="https://google.com" target='_blank'>News App</a>
      </h3>
      <p>
      This News App is a responsive and user-friendly platform built with React and REST API. It delivers real-time top news across various categories, ensuring users stay informed about the latest events.
      </p></div>
    <div className="te1">
        <span>React</span>
        <span>Rest Api</span>
        <span>News Api</span>
       </div></div>
   </div>
    </div>
    
   </div>
   </>
  )
}
