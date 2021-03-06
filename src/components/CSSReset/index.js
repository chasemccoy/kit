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

  /**
 * 1. Prevent certain mobile browsers from automatically zooming fonts.
 * 2. Smooth scroll  
 */
  html {
    font-size: 62.5%;
    -ms-text-size-adjust: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 1 */
    scroll-behavior: smooth; /* 2 */
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

  *, ::before, ::after {
    box-sizing: border-box;
  }

  /* Elements
  * *********************************** */
  abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
    text-decoration-skip-ink: none;
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

  /**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 * 3. Render a 1px line by default
 */
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
    border: .5px solid; /* 3 */
  }

  img {
    border-style: none;
  }

  img, video {
    max-width: 100%;
    height: auto;
  }

  img, video, canvas, audio, iframe, embed, object  { 
    display: block;
    vertical-align: middle;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

 /* Forms
  * *********************************** */
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /* Attributes & states
  * *********************************** */
  [hidden] {
    display: none !important;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  /* User interaction
  * *********************************** */

  /* Pointer cursor for buttons */
  input[type="button"], button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }

  /*
  * 1. Remove the tapping delay in IE 10.
  * 2. Remove the tapping delay on clickable elements
  in all browsers.
  */
  a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex] {
    -ms-touch-action: manipulation; /* 1 */
    touch-action: manipulation; /* 2 */
  }
`

export default CSSReset