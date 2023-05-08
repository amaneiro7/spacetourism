import React from 'react'
import { Article, Image, Name, Section, WrapperInfo } from './style'

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
