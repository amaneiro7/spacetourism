import React from 'react'
import { Body, Image, Wrapper } from './style'
import { Name } from '@/style/GlobalStyle'

export const RenderTechnology = ({ name, images, description, children }) => {
  return (
    <Wrapper>
      <Image>
        <img src={images.portrait} alt={name} />
      </Image>
      {children}
      <Body>
        <p>THE TERMINOLOGY…</p>
        <Name>{name}</Name>
        <p>{description}</p>
      </Body>
    </Wrapper>
  )
}
