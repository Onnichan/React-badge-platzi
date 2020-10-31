import React from 'react';
import { Link } from 'react-router-dom';


import './styles/Navbar.css';
import logo from '../images/logo.png';

class Navbar extends React.Component{

  render(){

    return(
      <div className="Navbar">
        <div className="container-fluid">
          <Link href="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt=""/>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar