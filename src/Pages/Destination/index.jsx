import React, { useState } from 'react'
import { Layout } from '@/components/Layout'
import data from '@/Mock/data.json'
import { RenderDestintaion } from './RenderDestination'
import { NavList } from './NavList'
import { Wrapper } from './style'
import { Title } from '../../style/GlobalStyle'

export const DestinationPage = () => {
  const { destinations } = data
  const initialState = destinations.find(data => data.name === destinations[0].name)
  const [dataDestination, setDataDestination] = useState(initialState)
  const handleClick = target => () => {
    const newData = destinations.find(data => data.name === target)
    setDataDestination(newData)
  }

  return (
    <Layout page='destinationpage'>
      <Wrapper>
        <Title><span>01</span> PICK YOUR DESTINATION</Title>
        {dataDestination &&
          <RenderDestintaion {...dataDestination}>
            <NavList navList={destinations} onClick={handleClick} isActive={dataDestination.name} />
          </RenderDestintaion>}
      </Wrapper>
    </Layout>
  )
}
