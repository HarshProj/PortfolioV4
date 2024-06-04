import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { Home } from './Components/Home.js';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/>}/>
    </Routes>
  </Router>
  );
}

export default App;
