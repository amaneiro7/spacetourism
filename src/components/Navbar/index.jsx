import React from 'react'
import Logo from '../../assets/shared/logo.svg'
import { Hr, Header, Li, Nav, NavLink, Ul } from './style'

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
    name: '03 TECHNOLOGY'
  }
]

export const Navbar = () => {
  return (
    <Header>
      <picture>
        <img src={Logo} alt='Logo' />
      </picture>
      <Hr />
      <Nav>
        <Ul>
          {navbarList.map(navbar => (
            <Li key={navbar.name}>
              <NavLink
                to={navbar.path}
              >
                {navbar.name}
              </NavLink>
            </Li>))}
        </Ul>
      </Nav>
    </Header>
  )
}
