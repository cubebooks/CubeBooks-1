import React from 'react';
import Ham from './ham.jsx';
import Logo from './logo.jsx';
import Header from './header.jsx';
import Books from './books.jsx';
import './index.css';
import Contact from './contact.jsx';
import Nav from './Nav.jsx';
import Switch from './switch.jsx';
import './app.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
class App extends React.Component{
  loadLinkedin=()=>{
    window.location.assign('https://www.linkedin.com/company/78048587')
  }
  
    render(){
        return(<div id="page">
        <div id="home">
        
        <Ham class="h"></Ham>
       
        <Nav class="n"></Nav>
        <Switch></Switch>
        <Logo></Logo>
       <div class="wrap"><Header></Header></div>
        <h1>welcome to cube books, the no 1 place to get all your books for free</h1>
      </div>
      <div class="wrapper">
      <div id="books">
      <Books></Books>
      </div>
      <div id="contact"><Contact></Contact></div>
      </div>
      <div className="social">
      <i className="fab fa-linkedin" info="linkedin" onClick={this.loadLinkedin}></i>

      </div>
      </div>)
    }
}
export default App;