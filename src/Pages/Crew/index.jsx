import React, { useState } from 'react'
import { Layout } from '@/components/Layout'
import data from '@/Mock/data.json'
import { Title, Wrapper } from './style'
import { RadioInputs } from './RadioInputs'
import { RenderCrew } from './RenderCrew'

export const CrewPage = () => {
  const { crew } = data
  const initialState = crew.find(data => data.name === crew[0].name)
  const [dataCrew, setDataCrew] = useState(initialState)
  const handleClick = ({ target: { value } }) => {
    const newData = crew.find(data => data.name === value)
    setDataCrew(newData)
  }

  return (
    <Layout page='crewpage'>
      <Wrapper>
        <Title><span>02</span> meet your crew</Title>
        {dataCrew &&
          <RenderCrew {...dataCrew}>
            <RadioInputs navList={crew} onClick={handleClick} isActive={dataCrew.name} />
          </RenderCrew>}
      </Wrapper>
    </Layout>
  )
}
