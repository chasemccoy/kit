import styled from 'styled-components'
import { COMMON, BORDER, LAYOUT, FLEX_CONTAINER, FLEX_ITEM } from '../utils/style-props'

const Box = styled.div`
  ${COMMON}
  ${BORDER}
  ${LAYOUT}
  ${FLEX_CONTAINER}
  ${FLEX_ITEM}
`

Box.displayName = 'Box'

export default Box