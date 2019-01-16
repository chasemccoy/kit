import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { configure, addDecorator } from '@storybook/react'
import CSSReset from 'components/CSSReset'
import defaultTheme from 'utils/theme'

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const theme = {
  ...defaultTheme,
  colors: {
    accent: 'dodgerBlue'
  }
}

const GlobalCSS = createGlobalStyle`
  body {
    font-family: ${defaultTheme.fonts.system};
  }
`

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <CSSReset />
      <GlobalCSS />
      {story()}
    </React.Fragment>
  </ThemeProvider>
))

configure(loadStories, module)