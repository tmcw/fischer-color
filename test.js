var test = require('tape'),
    interpolate = require('./');


test('interpolate', function(t) {
    t.deepEqual(interpolate(0, 0, 0), [ 10.697392778616015, 10.697392778616015, 10.697392778616015 ]);
    t.deepEqual(interpolate(0.1, 0.1, 0.1), [ 36.1949026281989, 25.467500151348798, 23.838016883988544 ]);
    t.deepEqual(interpolate([0.1, 0.1, 0.1]), [ 36.1949026281989, 25.467500151348798, 23.838016883988544 ]);
    t.end();
});
