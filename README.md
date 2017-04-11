# Fischer Color

[![build status](https://secure.travis-ci.org/tmcw/fischer-color.svg)](http://travis-ci.org/tmcw/fischer-color)
[![Greenkeeper badge](https://badges.greenkeeper.io/tmcw/fischer-color.svg)](https://greenkeeper.io/)

![](example.png)

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

* an array of `[red, green, blue]`
