import React from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'


function Navbar() {
  return (
    <nav className='nav'>
      <Link to ='/home' className='site-title'>Site Name</Link>
      <ul>
        {/* <li className='active'>
          <a href='/pricing'>Pricing</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li> simplified version below*/}
        <CustomLink to ='/pricing'>Pricing</CustomLink>
        <CustomLink to ='/about'>About</CustomLink>

      </ul>

    </nav>
  )
}

export default Navbar

function CustomLink ({to, children,  ...props}) {

//const path = window.location.pathname
// to determine if its active

const resolvedPath = useResolvedPath(to)
const isActive = useMatch({path : resolvedPath.pathname, end : true})

  return (
    <li className={isActive ? 'active' : ''}>
      < Link to={to}{...props}>{children}</Link>
    </li>
  )
}