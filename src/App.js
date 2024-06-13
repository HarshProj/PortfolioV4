import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { Home } from './Components/Home.js';
import { useState } from 'react';

function App() {
  const [op,setop]=useState("op");
  const[cl,setcl]=useState("cl")
  const [to,setto]=useState(true);
  
  const handleclick=()=>{
    const x=document.getElementsByTagName('body')
    if(to){
      setcl("op");
      setop("cl")
      // console.log(x)
      x[0].style.backgroundColor = "#ffff"
      x[0].style.color = "black"
      }
      else{
        setcl("cl");
        setop("op")
        x[0].style.backgroundColor = "#0A192F"
        x[0].style.color = "#C4D0EC"
    }
    setto(!to);
  }
  return (
    <Router>
    <Navbar handleclick={handleclick} cl={cl} op={op}/>
    <Routes>
      <Route path='/' element={ <Home to={to}/>}/>
    </Routes>
  </Router>
  );
}

export default App;
