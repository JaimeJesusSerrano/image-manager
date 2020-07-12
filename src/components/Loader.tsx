import React, { useContext } from 'react'
import { Backdrop, CircularProgress } from '@material-ui/core'

import LoaderContext from '~Contexts/Loader.context'

const Loader = () => {
  const { isLoading } = useContext(LoaderContext)

  return (
    <Backdrop open={isLoading} style={{ zIndex: 9999 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loader
