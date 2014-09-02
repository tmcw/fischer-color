module.exports.interpolate =

/**
 * @param h hue in range of [0..2π]
 * @param c chroma in [0..1]
 * @param l luminosity in range of [0..1]
 * @returns Array of [r, g, b] values.
 */
function interpolate(h, c, l) {
    'use strict';

    // unpack for the lazy
    if (Array.isArray(h)) {
        c = h[1]; l = h[2]; h = h[0];
    }

    // put red at the right
    h = h + (Math.PI / 2 - (Math.PI - 2));

    // keep chroma in range for this lightness
    if (c > 1 - 2 * Math.abs(l - 0.5)) {
        c = 1 - 2 * Math.abs(l - 0.5);
    }

    var r1 = Math.sin(h + Math.PI - 2.0) * 0.417211 * c + l,
        g1 = Math.sin(h + Math.PI + 1.5) * 0.158136 * c + l,
        b1 = Math.sin(h + Math.PI      ) * 0.455928 * c + l;

    return [
        // red
        Math.exp(Math.log(r1 * 0.923166 + 0.0791025) * 1.25) * 255,
        // green
        Math.exp(Math.log(g1 * 0.923166 + 0.0791025) * 1.25) * 255,
        // blue
        Math.exp(Math.log(b1 * 0.923166 + 0.0791025) * 1.25) * 255];
};
