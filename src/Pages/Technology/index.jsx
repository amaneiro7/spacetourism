import React, { useState } from 'react'
import { Layout } from '@/components/Layout'
import data from '@/Mock/data.json'
import { RenderTechnology } from './RenderTechnology'
import { CircleInputs } from './CircleInputs'
import { Title } from '../../style/GlobalStyle'
import { Section } from './style'

export const TechnologyPage = () => {
  const { technology } = data
  const initialState = technology.find(data => data.name === technology[0].name)
  const [dataTechnology, setDataTechnology] = useState(initialState)
  const handleClick = target => () => {
    const newData = technology.find(data => data.name === target)
    setDataTechnology(newData)
  }
  return (
    <Layout page='technologypage'>
      <Section>
        <Title><span>03</span> Space Launch 101</Title>
        {dataTechnology &&
          <RenderTechnology {...dataTechnology}>
            <CircleInputs navList={technology} onClick={handleClick} isActive={dataTechnology.name} />
          </RenderTechnology>}
      </Section>
    </Layout>
  )
}
