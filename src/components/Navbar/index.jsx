import React from 'react'
import Logo from '../../assets/shared/logo.svg'
import { Hr, Header, Li, Nav, NavLink, Ul } from './style'

const navbarList = [
  {
    path: '/',
    nameId: '00',
    name: 'HOME'
  },
  {
    path: '/destination',
    nameId: '01',
    name: 'DESTINATION'
  },
  {
    path: '/crew',
    nameId: '02',
    name: 'CREW'
  },
  {
    path: '/technology',
    nameId: '03',
    name: 'TECHNOLOGY'
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
                <span>{navbar.nameId} </span>
                {navbar.name}
              </NavLink>
            </Li>))}
        </Ul>
      </Nav>
    </Header>
  )
}
