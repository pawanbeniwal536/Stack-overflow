import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.png'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className="side-nav">
        <NavLink to='/'className='Home-cls side-nav-links' activeClassName='active'>
          <p>Home</p>
        </NavLink>
        <div className='margin-cls pad-cls sice-nav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to='/Questions'className='pad-cls side-nav-links'activeClassName='active' >
            <img src={Globe} alt="Globe" />
            <p style={{paddingLeft:"10px"}}>Questions - </p>
          </NavLink>
          <NavLink to='/Tags'className='pad-cls side-nav-links'activeClassName='active'style={{paddingLeft:"40px"}}>
          <p >Tags</p>
          </NavLink>
          <NavLink to='/Users'className='pad-cls side-nav-links'activeClassName='active'style={{paddingLeft:"40px"}}>
          <p>Users</p>
          </NavLink>
         </div>
          </nav>
    </div>
  )
}

export default LeftSidebar
