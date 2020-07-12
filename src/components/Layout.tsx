import React from 'react'
import styled from 'styled-components'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <SContainer>{children}</SContainer>
)

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto Light';
  min-height: 100vh;
`

export default Layout
