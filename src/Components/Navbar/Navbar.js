import React from 'react'
import './style.css'

import { NavLink } from 'react-router-dom';
import BtnDarkmove from '../BtnDarkmove';
export default function Navbar() {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link"
  return (
  <nav className="nav">
    <div className="container">
      <div className="nav-row">
        <NavLink to="/" className="logo">
          <strong>My</strong> portfolio
        </NavLink >
        <BtnDarkmove />
        <ul className="nav-list">
          <NavLink className={({isActive})=>{return isActive ? activeLink : normalLink}} to="/">Home</NavLink>
          <NavLink className={({isActive})=>{return isActive ? activeLink : normalLink}} to="projects">Projects</NavLink>
          <NavLink className={({isActive})=>{ return isActive ? activeLink : normalLink}}to="contact" >Contacts</NavLink>
        </ul>
      </div>
    </div>
  </nav>
  )
}
