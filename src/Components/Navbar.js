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
    <div id='cl' className={close}>
      <div className="toggle" onClick={updatemenu} ><FontAwesomeIcon icon="fa-solid fa-bars" /></div>
    <div className="comp"><Link to="./" className='navigate' style={{textDecoration:'none'}}>Home</Link></div>
          <div className="comp"><Link to='./candidates' className='navigate' style={{textDecoration:'none'}}>Candidates</Link></div>
          <div className="comp"><Link to='./login' className='navigate' style={{textDecoration:'none'}}>Login</Link>/<Link to='./signup' style={{textDecoration:'none'}} className='navigate'>Sign up</Link></div>
    </div>
    <div className="nav">
      <div className="navd">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <div className="comp"><Link to="./" className='navigate' style={{textDecoration:'none'}}>Home</Link></div>
          <div className="comp"><Link to='./candidates' className='navigate' style={{textDecoration:'none'}}>Candidates</Link></div>
          <div className="comp b12"><Link to='./login' className='navigate' style={{textDecoration:'none'}}>Login</Link>/<Link to='./signup' style={{textDecoration:'none'}} className='navigate'>Sign up</Link></div>
        </div>
        <div className={open}onClick={updatemenu} id='cl2'><FontAwesomeIcon icon="fa-solid fa-bars" /></div>
      </div>
     
    </div>
    </div>
  )
}
