import React from 'react'
import styled, { css } from 'styled-components'
import { COMMON, TYPOGRAPHY, BORDER, LAYOUT } from '../utils/style-props'

const Text = styled.div`
  ${p => p.uppercase && css`
    text-transform: uppercase;
    letter-spacing: 1px;
  `}

  ${p => p.italic && css`
    font-style: italic;
  `}

  ${COMMON}
  ${TYPOGRAPHY}
  ${BORDER}
  ${LAYOUT}
`

Text.p = props => <Text as='p' {...props} />
Text.span = props => <Text as='span' {...props} />

Text.p.displayName = 'Text.p'
Text.span.displayName = 'Text.span'

export default Text