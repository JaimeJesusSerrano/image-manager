import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import NoSsr from '@material-ui/core/NoSsr'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles'

import Layout from '~Components/Layout'
import Loader from '~Components/Loader'
import Typography from '~Fonts/Typography'
import LoaderProvider from '~Providers/Loader.provider'
import Router from '~Routes'
import theme from '~Theme'

function App() {
  return (
    <NoSsr>
      <Typography />
      <StylesProvider injectFirst>
        {/* To override the current theme */}
        <MuiThemeProvider theme={theme}>
          {/* Allow share the theme with styled components */}
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <LoaderProvider>
                <Layout>
                  <Router />
                </Layout>
                <Loader />
              </LoaderProvider>
            </BrowserRouter>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </NoSsr>
  )
}

export default App
