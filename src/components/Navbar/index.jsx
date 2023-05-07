import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/shared/logo.svg'
import './navbar.css'

const navbarList = [
  {
    path: '/',
    name: '00 HOME'
  },
  {
    path: '/destination',
    name: '01 DESTINATION'
  },
  {
    path: '/crew',
    name: '02 CREW'
  },
  {
    path: '/technology',
    name: '04 TECHNOLOGY'
  }
]

export const Navbar = () => {
  return (
    <header>
      <picture>
        <img src={Logo} alt='Logo' />
      </picture>
      <hr />
      <nav>
        <ul>
          {navbarList.map(navbar => (
            <li key={navbar.name}>
              <NavLink
                className={({ isActive }) => isActive ? 'selected' : undefined}
                to={navbar.path}
              >
                {navbar.name}
              </NavLink>
            </li>))}
        </ul>
      </nav>
    </header>
  )
}
