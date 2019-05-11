import React from 'react'
import styled, { css } from 'styled-components'
import Box from 'components/Box'
import media from 'utils/media'

const GUTTER =  24
const GUTTER_SMALL = 16

const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;

  ${p => css`
    & > * {
      padding-top: ${p.gutter ? p.gutter * 2 : GUTTER}px;
      padding-left: ${p.gutter ? p.gutter : GUTTER / 2}px;
      padding-right: ${p.gutter ? p.gutter : GUTTER / 2}px;

      ${media(p.theme).tiny`
        padding-top: ${p.gutter ? p.gutter * 2 : GUTTER_SMALL}px;
        padding-left: ${p.gutter ? p.gutter : GUTTER_SMALL / 2}px;
        padding-right: ${p.gutter ? p.gutter : GUTTER_SMALL / 2}px;
      `}
    }
  `}
`

const Grid = ({ gutter, children, ...props }) => {
  const marginX = gutter ? -gutter : [-GUTTER_SMALL / 2, -GUTTER / 2]
  const marginTop = gutter ? -gutter * 2 : [-GUTTER_SMALL, -GUTTER]

  return (
    <Box overflow='hidden' {...props}>
      <Container
        gutter={gutter}
        mx={marginX}
        mt={marginTop}
      >
        {children}
      </Container>
    </Box>
  )
}


export default Grid
