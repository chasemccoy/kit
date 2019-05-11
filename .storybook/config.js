import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming';
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
    font-size: 18px;
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

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: '@chasemccoy/kit',
      brandUrl: 'https://github.com/chasemccoy/kit'
    }),
    showPanel: false,
    sidebarAnimations: false
  },
});

configure(loadStories, module)