import React from 'react'
import { createGlobalStyle } from 'styled-components'

import RobotoLightTTF from '~Fonts/roboto/Roboto-Light.ttf'
import RobotoMediumTTF from '~Fonts/roboto/Roboto-Medium.ttf'
import RobotoRegularTTF from '~Fonts/roboto/Roboto-Regular.ttf'

const Typography = () => <Styles />

const Styles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Light';
    src: local('Roboto Light'), url(${RobotoLightTTF}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto Medium';
    src: local('Roboto Medium'), url(${RobotoMediumTTF}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto Regular';
    src: local('Roboto Regular'), url(${RobotoRegularTTF}) format('truetype');
  }
`

export default Typography
