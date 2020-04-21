/**
 * @param {Number} v
 */
function _getGamma(v) {
  const c = 1 / v;
  const _C = Math.pow(v, v / (1 - v));
  const a = Math.pow(Math.E, _C * (v - 1));

  function getUY() {
    const _u = Math.random();
    const y = Math.pow(-1 * Math.log(_u), c);

    const u = Math.random();

    return [u, y];
  }

  let [u, y] = getUY();

  while (u > a * Math.pow(Math.E, Math.pow(y, v) - y)) {
    [u, y] = getUY();
  }

  return y;
}

/**
 * @param {Number} a
 * @param {Number} A
 * @param {Number} v
 */
function getGamma(a, A, v) {
  return a + _getGamma(v) / A;
}

const a = 3; // alpha
const A = 2; // lambda
const v = 0.17; // nu

let sum = 0;
const steps = 10000;
for (let i = 0; i < steps; i++) {
  sum += getGamma(a, A, v);
}

// Medie teoretica = a + v / A
console.log('medie teoretica', a + v / A);

const avg = sum / steps;
console.log('medie estimata', avg);
