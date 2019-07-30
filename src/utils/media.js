import { css } from 'styled-components'

const isRequired = () => { throw new Error('Must provide breakpoints to `media` utility') }

const media = (props = isRequired()) => {
  /* eslint-disable */
  const theme = props.hasOwnProperty('theme') ? props.theme : props 
  const breakpoints = theme.hasOwnProperty('namedBreakpoints')
    ? theme.namedBreakpoints
    : theme
  /* eslint-enable */

  return Object.keys(breakpoints).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)}
      }
    `

    return accumulator
  }, {})
}

export default media

// Use it like this:
//
// ${media.large`background-size: auto 75%;`}
// ${media.medium`background-size: auto 50%;`}
// ${media.small`background-size: auto 25%;`}
// ${media.tiny`background-size: auto 10%;`}
//
// If screen is `large` or smaller, do this
// If screen is `medium` or smaller, do this
// If screen is `small` or smaller, do this
// If screen is `tiny` or smaller, do this
