import React from 'react'
import styled, { css } from 'styled-components'
import { COMMON, BORDER, LAYOUT } from '../../utils/style-props'

export const UnorderedList = styled.ul`
  ${props => props.inline && css`
    list-style-type: none;
    margin: 0;
    padding: 0;
    line-height: 1;

    li {
      display: inline-block;
      margin-bottom: 0;
    }

    li:before {
      display: none;
    }
  `}

  ${props => props.unstyled && css`
    list-style-type: none;
    margin: 0;
    padding: 0;

    li:before {
      display: none;
    }
  `}

  ${COMMON}
  ${BORDER}
  ${LAYOUT}
`

export const OrderedList = props => <UnorderedList as='ol' {...props} />

