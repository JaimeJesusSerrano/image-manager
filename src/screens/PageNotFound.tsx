import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import AppBar from '~Components/AppBar'

const PageNotFound = (props: RouteComponentProps) => {
  return (
    <>
      <AppBar />
      Página no encontrada
    </>
  )
}

export default PageNotFound
