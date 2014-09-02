# Fischer Color

[![build status](https://secure.travis-ci.org/mapbox/fischer-color.png)](http://travis-ci.org/mapbox/fischer-color)

A JavaScript implementation of [Eric Fischer](https://github.com/ericfischer)'s
simple and perceptually friendly color interpolation.

## [Example](http://requirebin.com/?gist=236aaf7b579e3ecbf961)

## API

### `interpolate(hue, chroma, luminosity)` (or `interpolate([h, c, l])`)

Input:

* hue in range from 0 to 2 pi
* chroma in range from 0 to 1
* luminosity in range from 0 to 1

Returns:

* an array of `[red, green, blue]
