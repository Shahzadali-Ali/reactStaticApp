import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (

    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <div class="container">
  <a class="navbar-brand" href="#">
  React App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <NavLink to="/" className="nav-link">Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/about" className="nav-link">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </li>    
    </ul>
  </div> 
  </div> 
</nav>

       
    );
}
 
export default Navigation;