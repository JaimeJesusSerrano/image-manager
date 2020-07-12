import { createContext } from 'react'

const LoaderContext = createContext({
  hideLoader: () => {},
  isLoading: false,
  showLoader: () => {},
})

export default LoaderContext
