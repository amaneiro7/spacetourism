import React from 'react'
import { Article, Image, Section, WrapperInfo } from './style'
import { Name } from '@/style/GlobalStyle'

export const RenderCrew = ({ name, images, role, bio, children }) => {
  return (
    <Section>
      <Article>
        <WrapperInfo>
          <h4>{role}</h4>
          <Name>{name}</Name>
          <p>{bio}</p>
        </WrapperInfo>
        {children}
      </Article>
      <Image src={images.png} alt={name} />
    </Section>

  )
}
