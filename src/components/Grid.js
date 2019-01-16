import React from 'react'
import styled, { css } from 'styled-components'
import Box from 'components/Box'
import media from 'utils/media'

const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;

  ${p => css`
    & > * {
      padding-top: ${p.gutter ? `${p.gutter * 2}px` : '24px'};
      padding-left: ${p.gutter ? `${p.gutter}px` : '12px'};
      padding-right: ${p.gutter ? `${p.gutter}px` : '12px'};

      ${media(p.theme).tiny`
        padding-top: ${p.gutter ? `${p.gutter * 2}px` : '16px'};
        padding-left: ${p.gutter ? `${p.gutter}px` : '8px'};
        padding-right: ${p.gutter ? `${p.gutter}px` : '8px'};
      `}
    }
  `}
`

const Grid = ({ gutter, ...props }) => (
  <Container
    mx={gutter ? `-${gutter}px` : ['-8px', '-12px']}
    mt={gutter ? `-${gutter * 2}px` : ['-16px', '-24px']}
    {...props}
  />
)

export default Grid
