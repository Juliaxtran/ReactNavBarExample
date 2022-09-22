import React from 'react'


function Navbar() {
  return (
    <nav className='nav'>
      <a href='/home' className='site-title'>Site Name</a>
      <ul>
        {/* <li className='active'>
          <a href='/pricing'>Pricing</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li> simplified version below*/}
        <CustomLink href='/pricing'>Pricing</CustomLink>
        <CustomLink href='/about'>About</CustomLink>

      </ul>

    </nav>
  )
}

export default Navbar

function CustomLink ({href, children,  ...props}) {

const path = window.location.pathname
// to determine if its active

  return (
    <li className={path === href ? 'active': ''}>
      <a href={href}{...props}>{children}</a>
    </li>
  )
}