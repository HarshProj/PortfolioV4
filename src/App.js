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
import logo from './Assets/HC.png'
import logo2 from './Assets/HC2.png'
function App() {
  const [op,setop]=useState("op");
  const[cl,setcl]=useState("cl")
  const [to,setto]=useState(true);
  const [logob, setlogo] = useState(logo)
  const handleclick=()=>{
    const x=document.getElementsByTagName('body')
    if(to){
      setcl("op");
      setop("cl")
      // console.log(x)
      x[0].style.backgroundColor = "#ffff"
      x[0].style.color = "black"
      setlogo(logo);
    }
    else{
      setcl("cl");
      setlogo(logo2);
        setop("op")
        x[0].style.backgroundColor = "#0A192F"
        x[0].style.color = "#C4D0EC"
    }
    setto(!to);
  }
  return (
    <Router>
    <Navbar handleclick={handleclick} cl={cl} op={op} logob={logob}/>
    <Routes>
      <Route path='/' element={ <Home to={to}/>}/>
    </Routes>
  </Router>
  );
}

export default App;
