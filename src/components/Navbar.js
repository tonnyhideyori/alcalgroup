import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import App from './App';
import Tabs from './Tabs';
import Us from './Us'
import Service from './Service';
import Contact from './Contact'
const NavbarInstance=()=>{

return(

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link to="/" className="navbar-brand">
      Alcal Group
      </Link>
    </div>
    <ul className="nav navbar-nav">
      <li className="active">
      <Link to="/" component={App}>Home</Link></li>
      <li><Link to="/us" component={Us}>About Us</Link></li>
      <li><Link to="/service" component={Service}>Service</Link></li>
      
    </ul>

  </div>
</nav>

  );


}
export default NavbarInstance;
