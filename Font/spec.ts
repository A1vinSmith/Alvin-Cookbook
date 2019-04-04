import test from 'ava'
import font, { COLOR_NEUTRAL, FAMILY, SIZE_LARGE, WEIGHT } from './'

test('font.large.neutral()', (t) => {
  const actual = font.large.neutral()
  t.deepEqual(actual, {
    color: COLOR_NEUTRAL,
    fontFamily: FAMILY,
    fontSize: SIZE_LARGE,
    fontWeight: WEIGHT
  })
})
