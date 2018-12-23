var test = require("tape"),
  interpolate = require("./").interpolate;

test("interpolate", function(t) {
  t.deepEqual(interpolate(0, 0, 0).map(n => +n.toFixed(5)), [
    10.69739,
    10.69739,
    10.69739
  ]);
  t.deepEqual(interpolate(0.1, 0.1, 0.1).map(n => +n.toFixed(5)), [
    36.1949,
    25.4675,
    23.83802
  ]);
  t.deepEqual(interpolate([0.1, 0.1, 0.1]).map(n => +n.toFixed(5)), [
    36.1949,
    25.4675,
    23.83802
  ]);
  t.end();
});
