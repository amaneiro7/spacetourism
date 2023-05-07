import React, { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { RoutesPath } from '../routes'

export default function App () {
  return (
    <ErrorBoundary>
      <Suspense>
        <RoutesPath />
      </Suspense>
    </ErrorBoundary>
  )
}
