import * as s from 'styled-system'

export const COMMON = s.compose(
  s.color,
  s.space 
)

export const BORDER = s.compose(
  s.borders,
  s.borderColor,
  s.boxShadow,
  s.borderRadius
)

export const TYPOGRAPHY = s.compose(
  s.fontFamily,
  s.fontSize,
  s.fontWeight,
  s.lineHeight,
  s.textAlign
)

export const LAYOUT = s.compose(
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

export const POSITION = s.compose(
  s.position,
  s.zIndex,
  s.top,
  s.right,
  s.bottom,
  s.left
)

export const FLEX_CONTAINER = s.compose(
  s.flexBasis,
  s.flexDirection,
  s.flexWrap,
  s.alignContent,
  s.alignItems,
  s.justifyContent,
  s.justifyItems,
  s.order
)

export const FLEX_ITEM = s.compose(
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