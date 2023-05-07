import { Li, Ul } from './style'

export const NavList = ({ navList = [], onClick, isActive }) => {
  const navName = navList.map(nav => nav.name)
  return (
    <Ul>
      {navName.map(nav => (
        <Li
          key={nav}
          className={isActive === nav && 'selected'}
          onClick={onClick(nav)}
        >
          {nav}
        </Li>))}
    </Ul>
  )
}
