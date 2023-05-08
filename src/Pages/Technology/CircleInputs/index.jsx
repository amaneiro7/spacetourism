import React from 'react'
import { Button, WrapperInputs } from './style'

export const CircleInputs = ({ navList = [], onClick, isActive }) => {
  const navName = navList.map(nav => nav.name)
  return (
    <WrapperInputs>
      {navName.map((nav, index) => {
        const isSelected = isActive === nav
        return (
          <Button
            key={`technology-${nav}`}
            className={isSelected && 'selected'}
            onClick={onClick(nav)}
          >
            {index + 1}
          </Button>
        )
      })}
    </WrapperInputs>
  )
}
