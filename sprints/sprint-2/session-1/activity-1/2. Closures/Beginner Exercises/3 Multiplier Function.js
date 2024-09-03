function createMultiplier(n) {
  // Retornamos una función que multiplica su argumento por n
  return function (x) {
    return x * n;
  };
}

const double = createMultiplier(2);
console.log(double(5));

const triple = createMultiplier(3);
console.log(triple(5));
