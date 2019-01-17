import styled from 'styled-components'
import { width, height, color, space, boxShadow, borderRadius, display, justifyContent, alignItems, flexWrap, flex, flexDirection, minWidth, minHeight, maxWidth, flexBasis } from 'styled-system' 

const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${boxShadow}
  ${borderRadius}
  ${display}
  ${justifyContent}
  ${alignItems}
  ${flexWrap}
  ${flex}
  ${flexDirection}
  ${minHeight}
  ${minWidth}
  ${maxWidth}
  ${color}
  ${flexBasis}
`

Box.displayName = 'Box'

export default Box