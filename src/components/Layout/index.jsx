import React from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Main, MainSection } from './style'
import './Layout.css'

export const Layout = ({ children, page }) => {
  return (
    <>
      <Main className={`${page}`}>
        <Navbar />
        <MainSection>
          {children}
        </MainSection>
        <Footer />
      </Main>
    </>
  )
}
