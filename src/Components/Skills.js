import React from 'react'
import '../CSS/Skills.css'
import { motion } from "framer-motion"
import {fadeIn} from "../variants"
export const Skills = () => {
  return (
    <>
    <motion.div 
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}viewport={{once:false,amount:0.7}}  className="Skills-box" id='skills'>
    <div
    className="about-h1"> <h1>Here are Some skills I persue</h1> <hr className='about-hr'/></div>
   
    <div
    class="aboutdiv">
            <div  class="rank">
                <div class="lang" id="skill1"></div>
                <p>C++</p>
            </div>
            <div class="rank">
                <div class="lang" id="skill2"></div>
                <p>C</p>
            </div>
            <div class="rank">
                <div class="lang" id="skill4"></div>
                <p>HTML</p>
            </div>
            <div class="rank">
                <div class="lang" id="skill5"></div>
                <p>CSS
                </p>
            </div>
            <div class="rank">
                <div class="lang" id="skill6"></div>
                <p>Java Script
                </p>
            </div>
            <div class="rank">
                <div class="lang" id="skill7"></div>
                <p>React Js
                </p>
            </div>
            <div class="rank">
                <div class="lang" id="skill8"></div>
                <p>Node Js
                </p>
            </div>
            <div class="rank">
                <div class="lang" id="skill3"></div>
                
                <p>Mongodb
                </p>
            </div>
        </div>
    </motion.div>
    </>
  )
}
