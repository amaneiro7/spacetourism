import React, { useState } from 'react'
import { Layout } from '@/components/Layout'
import data from '@/Mock/data.json'
import { Div, Title, Wrapper, WrapperInfo } from './style'
import { RadioInputs } from './RadioInputs'

export const CrewPage = () => {
  const { crew } = data
  const initialState = crew.find(data => data.name === crew[0].name)
  const [dataCrew, setDataCrew] = useState(initialState)
  const handleClick = ({ target: { value } }) => {
    const newData = crew.find(data => data.name === value)
    setDataCrew(newData)
  }
  const { name, images, role, bio } = dataCrew

  return (
    <Layout page='crewpage'>
      <Wrapper>
        <WrapperInfo>
          <Title><span>02</span> meet your crew</Title>
          <Div>
            <h4>{role}</h4>
            <h3>{name}</h3>
            <p>{bio}</p>
          </Div>
          <RadioInputs navList={crew} onClick={handleClick} isActive={dataCrew.name} />
        </WrapperInfo>
        <img src={images.png} alt={name} />
      </Wrapper>
    </Layout>
  )
}
