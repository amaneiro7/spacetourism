import { Input, Wrapperinputs } from './style'

export const RadioInputs = ({ navList = [], onClick, isActive }) => {
  const navName = navList.map(nav => nav.name)
  return (
    <Wrapperinputs>
      {navName.map(nav => {
        const isChecked = isActive === nav
        return (
          <Input
            key={`crew-${nav}}`}
            type='radio'
            value={nav}
            onChange={onClick}
            checked={isChecked}
          />
        )
      })}
    </Wrapperinputs>
  )
}
