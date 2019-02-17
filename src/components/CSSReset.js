import { createGlobalStyle } from 'styled-components'

const CSSReset = createGlobalStyle`
  html, body,
  h1, h2, h3, h4, h5, h6,
  a, p, span,
  em, small, strong,
  sub, sup,
  mark, del, ins, strike,
  abbr, dfn,
  blockquote, q, cite,
  code, pre,
  ol, ul, li, dl, dt, dd,
  div, section, article,
  main, aside, nav,
  header, hgroup, footer,
  img, figure, figcaption,
  address, time,
  audio, video,
  canvas, iframe,
  details, summary,
  fieldset, form, label, legend,
  table, caption,
  tbody, tfoot, thead,
  tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  /* Typography
  * *********************************** */
  html {
    font-size: 62.5%;
  }

  body {
    line-height: 1.5;
  }

  * {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  /* Layout
  * *********************************** */
  article,
  aside,
  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Elements
  * *********************************** */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  img,
  video {
    max-width: 100%;
  }

  img {
    border-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: "";
    content: none;
  }

  img, video, canvas, audio, iframe, embed, object  { 
    display: block;
    vertical-align: middle;
  }

  img, video {
    max-width: 100%;
    height: auto;
  }
  
  img {
    border-style: none;
  }

  /* Attributes & states
  * *********************************** */
  [hidden] {
    display: none !important;
  }

  [disabled] {
    cursor: not-allowed;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
`

export default CSSReset