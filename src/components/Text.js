import styled, { css } from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
  maxWidth,
  borders,
  borderColor,
  textAlign,
  width,
  display
} from 'styled-system'

const Text = styled.div`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${lineHeight}
  ${borders}
  ${borderColor}
  ${textAlign}
  ${width}
  ${maxWidth}
  ${display}

  ${p => p.uppercase && css`
    text-transform: uppercase;
    letter-spacing: 1px;
  `}

  ${p => p.italic && css`
    font-style: italic;
  `}
`

Text.p = Text.withComponent('p')
Text.span = Text.withComponent('span')

Text.displayName = 'Text'
Text.p.displayName = 'Text.p'
Text.span.displayName = 'Text.span'

export default Text