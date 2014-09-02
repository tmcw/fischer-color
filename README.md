# Fischer Color

[![build status](https://secure.travis-ci.org/mapbox/fischer-color.png)](http://travis-ci.org/mapbox/fischer-color)

A JavaScript implementation of [Eric Fischer](https://github.com/ericfischer)'s
simple and perceptually friendly color interpolation.

## API

### `interpolate(hue, chroma, luminosity)` (or `interpolate([h, c, l])`)

Interpolate a color in `hue, chroma, luminosity` form into an
`[r, g, b]` color triplet.
