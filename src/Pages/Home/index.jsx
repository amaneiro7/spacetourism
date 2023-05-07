import React from 'react'
import { Layout } from '../../components/Layout'
import { Article, Button, Wrapper } from './style'

export const HomePage = () => {
  return (
    <Layout page='homepage'>
      <Wrapper>
        <Article>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </Article>
        <Button type='button'><h4>Explore</h4></Button>
      </Wrapper>
    </Layout>
  )
}
