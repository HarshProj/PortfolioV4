import React, { useState } from 'react'
import '../CSS/Navbar.css'
import {
  Link
} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../Assets/sitelogo.png'
export const Navbar = () => {
   const [toggle,usetoggle]=useState(false)
   const [open,useopen]=useState("toggle")
   const [close,useclose]=useState("close")
   const updatemenu=()=>{
    if(!toggle){
      useclose("togglemenu");
      useopen("toggle");
    }
    else{
      useopen("toggle");
      useclose("close");
    }
    usetoggle(!toggle);
   }
  return (
    <div className='homepage'>
    <div className="nav">
    <div id='cl' className={close}>
      <div  className={close} onClick={updatemenu} ><FontAwesomeIcon icon="fa-solid fa-bars" /></div>
    <div className="comp"><Link to="./" className='navigate' style={{textDecoration:'none'}}>Home</Link></div>
          <div className="comp"><Link to='./about' className='navigate' style={{textDecoration:'none'}}>About</Link></div>
          <div className="comp"><Link to='./skills' className='navigate' style={{textDecoration:'none'}}>Skills</Link>/<Link to='./projects' style={{textDecoration:'none'}} className='navigate'> Projects</Link></div>
    </div>
      <div className="navd">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <div className="comp"><Link to="./" className='navigate' style={{textDecoration:'none'}}>Home</Link></div>
          <div className="comp"><Link to='./about' className='navigate' style={{textDecoration:'none'}}>About</Link></div>
          <div className="comp b12"><Link to='./skills' className='navigate' style={{textDecoration:'none'}}>Skills</Link>/<Link to='./projects' style={{textDecoration:'none'}} className='navigate'>Projects</Link></div>
        </div>
        <div className={open}onClick={updatemenu} id='cl2'><FontAwesomeIcon icon="fa-solid fa-bars" /></div>
      </div>
     
    </div>
    </div>
  )
}
