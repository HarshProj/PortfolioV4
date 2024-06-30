import React, { useEffect, useState } from 'react'
import '../CSS/Work.css'
import githublogo from '../Assets/github.png'
import p1 from '../Assets/arczone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/fontawesome-free-solid'
import p2 from '../Assets/text.PNG'
import { ArrowSquareOut,GithubLogo,InstagramLogo,LinkedinLogo,XLogo } from "@phosphor-icons/react";
export const Work = (props) => {
  const[des,setDes]=useState('desc');
  const[pdes,setPdes]=useState('project-desc');
useEffect(()=>{
  if(props.to){
    setDes('des dark')
    setPdes('project-desc dark')
    const collection = document.querySelectorAll(".anch");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.color = "#CCD6F6";
    }
    const spn = document.getElementsByTagName("span");
    for (let i = 0; i < spn.length; i++) {
  spn[i].style.color = "#8892B0";
}
const pn = document.getElementsByTagName("p");
for (let i = 0; i < pn.length; i++) {
  pn[i].style.color = "#8892B0";
}
}
else{
  setDes('des light')
  setPdes('project-desc light')
  const pn = document.getElementsByTagName("p");
  for (let i = 0; i < pn.length; i++) {
  pn[i].style.color = "black";
  }
    const spn = document.getElementsByTagName("span");
    for (let i = 0; i < spn.length; i++) {
    spn[i].style.color = "black";
    }
    const collection = document.querySelectorAll(".anch");
  for (let i = 0; i < collection.length; i++) {
  collection[i].style.color = "black";
  }
  }
},[props.to])
  return (
   <>
   <div className="work-box">
    <div className="work-section">

   <div className="about-h1"><h1>Some Things I've Built</h1><hr className='about-hr'/></div>
   <div className="project">
    <div className="img-div">
      <img src={p1} alt="" className='img-project'  onClick={()=>{window.open("https://arc-zone-client-side.onrender.com" , "_blank");}}/>
    </div>
    <div className="project-info">
      <div className="project-title">
        <p>Featured Project </p>
        <h1 className='project-title'>Arc Zone</h1>
      </div>
      <div className="source-code">
       <div className="tech-used">
        <p>React</p>
        <p>MongoDB</p>
        <p>Nodejs</p>
        <p>Express</p>
       </div>
       <div className="go-through">
       <li><a className="liveat" href="https://arc-zone-client-side.onrender.com" target='_blanck' class="source-code"><ArrowSquareOut size={32} /></a>
       </li>
       <li><a href="https://github.com/HarshProj/Arc-Zone-client-side.git" target='_blanck' class="source-code"><GithubLogo size={28} /></a></li>

       </div>
      </div>
    </div>
      <div className={pdes}>
      A full-stack e-commerce website designed for seamless online clothing purchases. Offers a comprehensive and user-centric e-commerce solution for online clothing retailers, built with cutting-edge technologies that prioritize performance, security, and scalability.
      </div>
      
   </div>
   <div id ="pp1"className="project p1" onClick={()=>{window.open("https://github.com/HarshProj/inotebook.git" , "_blank");}}>
   
    <div className="project-info pi"  >
      <div className="project-title project-title-p2">
        <p>Featured Project </p>
      <h1 className='project-title'>Inotebook</h1> 
      </div>
      <div className="source-code">
       <div className="tech-used tech-used-p2">
        <p>React</p>
        <p>MongoDB</p>
        <p>Nodejs</p>
        <p>Express</p>
       </div>
       <div className="go-through go-through-p2">
       <li><a className="liveat" href="https://github.com/HarshProj/inotebook.git" target='_blanck' class="source-code"><ArrowSquareOut size={32} /></a></li>
       <li><a href="https://github.com/HarshProj/inotebook.git" target='_blanck' class="source-code"><GithubLogo size={28} /></a></li>

       </div>
      </div>
    </div>
      <div className={des}>
      This innovative to-do list application empowers users to conquer their daily tasks with a feature-rich and user-friendly interface.  Built with a focus on efficiency and organization.
      </div>
      <div className="img-div i1">
      <img src={p2} alt="" className='img-project'/>
    </div>
   </div>
   <div className="about-h1"><h1>Other Noteworthy Projects</h1> <hr className='about-hr'/>
   </div>
   
   <div className="small-projects">
   <div className="project-card" >
    <div className="onhov" onClick={()=>{window.open("https://authentication-2h63.onrender.com" , "_blank");}}></div>
    
    <div className="project-folder">
      <div className="folder"><FontAwesomeIcon icon={faFolder} style={{width:'100%',height:"100%"}} className='fldr' /></div>
      
      <div className="folder-urls"><div id='mip' className="go-through mp">
       <li><a className="liveat" href="https://authentication-2h63.onrender.com"  target='_blanck' class=""><ArrowSquareOut size={32} /></a></li>
       <li><a href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" target='_blanck' class=""><GithubLogo size={28} /></a>
       </li>

       </div></div>
      </div>
    <div className='project-details'>

      <h3 className='project-link'>
        <a href="https://github.com/HarshProj/Authentication.git" className="anch" target='_blank' >Authentication</a>
      </h3>
      <p>
      This Authentication App ensures secure user authentication and email verification. It efficiently manages user details using a modern tech stack.
      </p></div>
    <div className="te1">
        <span>Vite js</span>
        <span>MongoDB</span>
        <span>Nodejs</span>
        <span>Justand</span>
       </div></div>
    <div className="project-card" ><div className="project-folder">
      
    <div className="onhov" onClick={()=>{window.open("https://github.com/HarshProj/Bharat-Intern-Task-II.git", "_blank");}} ></div>
      <div className="folder"><FontAwesomeIcon icon={faFolder} style={{width:'100%',height:"100%"}} /></div>
      
      <div className="folder-urls"><div id='mip'  className="go-through mp">
       <li><a className="liveat" href="https://www.linkedin.com/in/harsh-chauhan-0a34b01a0" target='_blanck' ><ArrowSquareOut size={32} /></a></li>
       <li><a href="https://github.com/HarshProj/Bharat-Intern-Task-II.git" target='_blanck' ><GithubLogo size={28} /></a></li>

       </div></div>
      </div>
    <div className='project-details'>
      <h3 className='project-link'>
        <a href="https://github.com/HarshProj/Bharat-Intern-Task-II.git" target='_blank' className="anch">Blog App</a>
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
       <div className="project-card" >
        
    <div className="onhov" onClick={()=>{window.open("https://free-code.vercel.app/", "_blank");}} ></div>
        <div className="project-folder">
      <div className="folder"><FontAwesomeIcon icon={faFolder} style={{width:'100%',height:"100%"}} /></div>
      
      <div className="folder-urls"><div id='mip'  className="go-through mp">
       <li><a className="liveat" href="https://github.com/HarshProj/FreeCode.git" target='_blanck' ><ArrowSquareOut size={32} /></a></li>
       
       <li><a href="https://github.com/HarshProj/FreeCode.git" target='_blanck' ><GithubLogo size={28} /></a></li>

       </div></div>
      </div>
    <div className='project-details'>
      <h3 className='project-link'>
        <a href="https://github.com/HarshProj/FreeCode.git" target='_blank' className="anch">FreeCode</a>
      </h3>
      <p>
      This Code Compiler and Problem-Solving App enables users to write, compile, and run code in multiple programming languages.
      </p></div>
    <div className="te1">
        <span>React</span>
        <span>codemirror</span>
        <span>JS</span>
       </div></div>
    <div className="project-card" >
      
    <div className="onhov" onClick={()=>{window.open("https://github.com/HarshProj/News-app.git", "_blank");}}></div>
    <div className="project-folder">
      <div className="folder"><FontAwesomeIcon icon={faFolder} style={{width:'100%',height:"100%"}} /></div>
      
      <div className="folder-urls"><div id='mip'  className="go-through mp">
       <li><a className="liveat" href="https://github.com/HarshProj/News-app.git" target='_blanck' ><ArrowSquareOut size={32} /></a></li>
       <li><a href="https://github.com/HarshProj/News-app.git" target='_blanck' ><GithubLogo size={28} /></a></li>

       </div></div>
      </div>
    <div className='project-details'>
      <h3 className='project-link'>
        <a href="https://google.com" target='_blank' className="anch">News App</a>
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
