function randExp(rate = 1) {
  return (-1 * Math.log(Math.random())) / rate;
}

/**
 * @returns {Number}
 */
function _getN() {
  function getUY() {
    const u = Math.random();
    const y = randExp();

    return [u, y];
  }

  let [u, y] = getUY();

  while (u <= Math.pow(Math.E, -Math.pow(y, 2) / 2 + y - 0.5)) {
    [u, y] = getUY();
  }

  return Math.random() <= 0.5 ? y : -y;
}

/**
 *
 * @param {Number} m
 * @param {Number} o
 */
function getN(m, o) {
  return m + o * _getN();
}

let sum = 0;
const steps = 10000;
for (let i = 0; i < steps; i++) {
  sum += getN(2, 3);
}

const avg = sum / steps;
console.log('medie estimata', avg);
