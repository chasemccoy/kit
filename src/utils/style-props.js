import {styles as s, compose} from 'styled-system'

export const COMMON = compose(
  s.color,
  s.space 
)

export const BORDER = compose(
  s.borders,
  s.borderColor,
  s.boxShadow,
  s.borderRadius
)

export const TYPOGRAPHY = compose(
  s.fontFamily,
  s.fontSize,
  s.fontWeight,
  s.lineHeight,
  s.textAlign
)

export const LAYOUT = compose(
  s.display,
  s.size,
  s.width,
  s.height,
  s.minWidth,
  s.minHeight,
  s.maxWidth,
  s.maxHeight,
  s.overflow,
  s.verticalAlign
)

export const POSITION = compose(
  s.position,
  s.zIndex,
  s.top,
  s.right,
  s.bottom,
  s.left
)

export const FLEX_CONTAINER = compose(
  s.flexBasis,
  s.flexDirection,
  s.flexWrap,
  s.alignContent,
  s.alignItems,
  s.justifyContent,
  s.justifyItems,
  s.order
)

export const FLEX_ITEM = compose(
  s.flex,
  s.justifySelf,
  s.alignSelf
)

const styles = {
  COMMON,
  BORDER,
  TYPOGRAPHY,
  LAYOUT,
  POSITION,
  FLEX_CONTAINER,
  FLEX_ITEM
}

export default styles