import styled from 'styled-components'
import { width, height, color, space, boxShadow, borderRadius, display, justifyContent, alignItems, flexWrap, flex, flexDirection, minWidth, minHeight, maxWidth } from 'styled-system' 

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
`

export default Box