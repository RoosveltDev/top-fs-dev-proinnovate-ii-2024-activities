function fibonacci(n) {
  // Caso base: el primer y segundo número en la secuencia de Fibonacci son 0 y 1
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  // Caso recursivo: sumar los dos números anteriores en la secuencia de Fibonacci
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(7));
