import React from 'react'
import { Navbar } from '../Navbar'
import './Layout.css'
import { Footer } from '../Footer'
import { MainSection } from './style'

export const Layout = ({ children, page }) => {
  return (
    <main className={`${page}`}>
      <Navbar />
      <MainSection>
        {children}
      </MainSection>
      <Footer />
    </main>
  )
}
