import React from 'react'
import '../CSS/Work.css'
import githublogo from '../Assets/github.png'
import p1 from '../Assets/bl.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/fontawesome-free-solid'
import p2 from '../Assets/text.PNG'
export const Work = () => {
  return (
   <>
   <div className="work-box">
    <div className="work-section">

   <div className="about-h1"><h1>Some Things I've Built</h1> <hr className='about-hr'/></div>
   <div className="project">
    <div className="img-div">
      <img src={p2} alt="" className='img-project'/>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae incidunt possimus ex dolore excepturi ratione fugiat nisi vero itaque animi, quos quam reprehenderit, placeat vel. Expedita rerum eaque sit harum officiis aliquid?
      </div>
      
   </div>
   <div className="project p1">
   
    <div className="project-info pi">
      <div className="project-title project-title-p2">
        <p>Featured Project </p>
        <h1>Arc Zone</h1>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae incidunt possimus ex dolore excepturi ratione fugiat nisi vero itaque animi, quos quam reprehenderit, placeat vel. Expedita rerum eaque sit harum officiis aliquid?
      </div>
      <div className="img-div i1">
      <img src={p1} alt="" className='img-project'/>
    </div>
   </div>
   <div className="about-h1"><h1>Other Noteworthy Projects</h1> <hr className='about-hr'/>
   </div>
   
   <div className="small-projects">
   <div className="project-card" onClick={()=>{window.open("http://google.com", "_blank");}}><div className="project-folder">
      <div className="folder"><FontAwesomeIcon icon={faFolder} style={{width:'100%',height:"100%"}} /></div>
      
      <div className="folder-urls"><div className="go-through mp">
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>

       </div></div>
      </div>
    <div className='project-details'>
      <h3 className='project-link'>
        <a href="https://google.com" target='_blank'>Project1</a>
      </h3>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a animi consequatur, quo laudantium totam libero expedita id reprehenderit omnis.
      </p></div>
    <div className="te1">
        <span>React</span>
        <span>MongoDB</span>
        <span>Nodejs</span>
        <span>Express</span>
       </div></div>
    <div className="project-card" onClick={()=>{window.open("http://google.com", "_blank");}}><div className="project-folder">
      <div className="folder"><FontAwesomeIcon icon={faFolder} style={{width:'100%',height:"100%"}} /></div>
      
      <div className="folder-urls"><div className="go-through mp">
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>

       </div></div>
      </div>
    <div className='project-details'>
      <h3 className='project-link'>
        <a href="https://google.com" target='_blank'>Project1</a>
      </h3>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a animi consequatur, quo laudantium totam libero expedita id reprehenderit omnis.
      </p></div>
    <div className="te1">
        <span>React</span>
        <span>MongoDB</span>
        <span>Nodejs</span>
        <span>Express</span>
       </div></div>
       <div className="project-card" onClick={()=>{window.open("http://google.com", "_blank");}}><div className="project-folder">
      <div className="folder"><FontAwesomeIcon icon={faFolder} style={{width:'100%',height:"100%"}} /></div>
      
      <div className="folder-urls"><div className="go-through mp">
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>

       </div></div>
      </div>
    <div className='project-details'>
      <h3 className='project-link'>
        <a href="https://google.com" target='_blank'>Project1</a>
      </h3>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a animi consequatur, quo laudantium totam libero expedita id reprehenderit omnis.
      </p></div>
    <div className="te1">
        <span>React</span>
        <span>MongoDB</span>
        <span>Nodejs</span>
        <span>Express</span>
       </div></div>
    <div className="project-card" onClick={()=>{window.open("http://google.com", "_blank");}}><div className="project-folder">
      <div className="folder"><FontAwesomeIcon icon={faFolder} style={{width:'100%',height:"100%"}} /></div>
      
      <div className="folder-urls"><div className="go-through mp">
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" class=""><img className='github' src={githublogo} loading="lazy" /></a></li>

       </div></div>
      </div>
    <div className='project-details'>
      <h3 className='project-link'>
        <a href="https://google.com" target='_blank'>Project1</a>
      </h3>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a animi consequatur, quo laudantium totam libero expedita id reprehenderit omnis.
      </p></div>
    <div className="te1">
        <span>React</span>
        <span>MongoDB</span>
        <span>Nodejs</span>
        <span>Express</span>
       </div></div>
   </div>
    </div>
    
   </div>
   </>
  )
}
