function createSimpleCounter() {
  // Variable privada que mantiene el estado del contador
  let contador = 0;

  // Retornamos una función que incrementa y retorna el contador
  return function () {
    contador++;
    return contador;
  };
}

const counter = createSimpleCounter();

console.log(counter());
console.log(counter());
console.log(counter());
