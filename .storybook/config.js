import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withOptions } from '@storybook/addon-options'
import CSSReset from 'components/CSSReset'
import Box from 'components/Box'
import Grid from 'components/Grid'
import Text from 'components/Text'
import Button from 'components/Button'
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
    font-size: 18px;
    font-family: ${defaultTheme.fonts.system};
  }
`

addDecorator(withInfo({
  inline: true,
  propTablesExclude: [Grid, Box, Text.p, Button],
  styles: {
    infoBody: {
      padding: '0',
      border: 'none'
    }
  }
}))

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <CSSReset />
      <GlobalCSS />
      <Box px={24}>{story()}</Box>
    </React.Fragment>
  </ThemeProvider>
))

addDecorator(
  withOptions({
    name: '@chasemccoy/kit',
    url: 'https://github.com/chasemccoy/kit',
    showAddonPanel: false,
    sidebarAnimations: false
  })
)

configure(loadStories, module)