import React, { useState } from 'react'
import '../CSS/Navbar.css'
import {
  Link
} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLightbulb, faMoon } from '@fortawesome/fontawesome-free-solid'

export const Navbar = (props) => {
  const [toggle, usetoggle] = useState(false)
  const [open, useopen] = useState("toggle")
  const [close, useclose] = useState("close")
  const updatemenu = () => {
    if (!toggle) {
      useclose("togglemenu");
      useopen("toggle");
    }
    else {
      useopen("toggle");
      useclose("close");
    }
    usetoggle(!toggle);
  }
 
  return (
    <div className='homepage'>
      <div className="nav">
        <div id='cl' className={close}>
          {/* <div className={close} onClick={updatemenu} ><FontAwesomeIcon icon="fa-solid fa-bars" /></div> */}
          <div className="mode" onClick={props.handleclick}>
            <FontAwesomeIcon className={props.cl} id="mo"  icon={faMoon}/>
            <FontAwesomeIcon className={props.op} style={{color:'#64FFDA'}}  icon={faLightbulb} />
            </div>
          <div className="comp">
            <Link to="./" className='navigate' style={{ textDecoration: 'none' }}>Home</Link></div>

          <div className="comp"><Link to='#about' className='navigate' style={{ textDecoration: 'none' }}>About</Link></div>

          <div className="comp"><Link to='#skills' className='navigate' style={{ textDecoration: 'none' }}>Skills</Link><span className='slash'>/</span><Link to='#projects' style={{ textDecoration: 'none' }} className='navigate'> Projects</Link></div>
          <div className=""> <a className="resume" href="https://drive.google.com/file/d/11P326P60A0zjNq5zqgm1bpVrddPCsNG_/view" target='_blanck'>Resume</a>
            </div>
        </div>
        <div className="navd">
          <div className="logo">
            <img src={props.logob}  alt="" />
          </div>
          <div className="links">
          <div className="mode" onClick={props.handleclick}>
            <FontAwesomeIcon className={props.cl} style={{color:'black'}}  icon={faMoon}/>
            <FontAwesomeIcon className={props.op} style={{color:'#64FFDA'}}  icon={faLightbulb} />
            </div>
            <div className="comp"><Link to="./" className='navigate' style={{ textDecoration: 'none' }}>Home</Link></div>
            <div className="comp"><Link to='#about' className='navigate' style={{ textDecoration: 'none' }}>About</Link></div>
            <div className="comp b12"><Link to='#skills' className='navigate' style={{ textDecoration: 'none' }}>Skills</Link><span className='slash'>/</span><Link to='#work' style={{ textDecoration: 'none' }} className='navigate'>Projects</Link></div>
            <div className=""> <a className="resume" href="https://drive.google.com/file/d/11P326P60A0zjNq5zqgm1bpVrddPCsNG_/view" target='_blanck'>Resume</a>
            </div>
          </div>
          <div className={open} onClick={updatemenu} id='cl2'><FontAwesomeIcon icon="fa-solid fa-bars" /></div>
        </div>

      </div>
    </div>
  )
}
