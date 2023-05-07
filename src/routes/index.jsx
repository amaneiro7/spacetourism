import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from '../Pages/Home'
import { DestinationPage } from '../Pages/Destination'
import { CrewPage } from '../Pages/Crew'
import { TechnologyPage } from '../Pages/Technology'

export const RoutesPath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/destination/' element={<DestinationPage />} />
        <Route path='/crew' element={<CrewPage />} />
        <Route path='/technology' element={<TechnologyPage />} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  )
}
