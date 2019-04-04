import { CSSProperties } from 'react'
import { BLACK, BLUE, GREY_DARK, WHITE } from './colors'

export const COLOR_ACCENT = BLUE
export const COLOR_DEFAULT = BLACK
export const COLOR_LIGHT = WHITE
export const COLOR_NEUTRAL = GREY_DARK
export const FAMILY = "'Segoe UI', sans-serif"
export const SIZE_LARGE = '26px'
export const SIZE_MEDIUM = '20px'
export const SIZE_SMALL = '16px'
export const SIZE_XLARGE = '34px'
export const SIZE_XSMALL = '14px'
export const SIZE_XXLARGE = '36px'
export const WEIGHT = 400

type Font = {
  color: string,
  size: string,
  accent: Font,
  default: Font,
  light: Font,
  neutral: Font,
  xsmall: Font,
  small: Font,
  medium: Font,
  large: Font,
  xlarge: Font,
  xxlarge: Font
} & (() => CSSProperties)

function font (this: Font): CSSProperties {
  return {
    color: this.color,
    fontFamily: FAMILY,
    fontSize: this.size,
    fontWeight: WEIGHT
  }
}

const dp = (type: 'color' | 'size', name: string, value: string) => {
  Object.defineProperty(font, name, { get () {
    this[type] = value
    return this
  }})
}

dp('color', 'accent', COLOR_ACCENT)
dp('color', 'default', COLOR_DEFAULT)
dp('color', 'light', COLOR_LIGHT)
dp('color', 'neutral', COLOR_NEUTRAL)
dp('size', 'xsmall', SIZE_XSMALL)
dp('size', 'small', SIZE_SMALL)
dp('size', 'medium', SIZE_MEDIUM)
dp('size', 'large', SIZE_LARGE)
dp('size', 'xlarge', SIZE_XLARGE)
dp('size', 'xxlarge', SIZE_XXLARGE)

export default font as Font
// TODO: convert this over to a TypeScript class.