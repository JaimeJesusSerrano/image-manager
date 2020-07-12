import React, { useState } from 'react'

import LoaderContext from '~Contexts/Loader.context'

interface LoaderProviderProps {
  children: React.ReactNode
}
const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const showLoader = () => {
    setLoading((prevState) => {
      return {
        ...prevState,
        isLoading: true,
      }
    })
  }

  const hideLoader = () => {
    setLoading((prevState) => {
      return {
        ...prevState,
        isLoading: false,
      }
    })
  }

  const loadingState = {
    hideLoader,
    isLoading: false,
    showLoader,
  }

  const [loading, setLoading] = useState(loadingState)

  return (
    <LoaderContext.Provider value={loading}>{children}</LoaderContext.Provider>
  )
}

export default LoaderProvider
