import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from '@storybook/react'

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const theme = {
  colors: {
    accent: 'dodgerBlue'
  },
  breakpoints: [
    '576px',
    '768px',
    '1000px',
    '1300px'
  ],
  namedBreakpoints: {
    tiny: '576px',
    small: '768px',
    medium: '1000px',
    large: '1300px'
  }
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module)