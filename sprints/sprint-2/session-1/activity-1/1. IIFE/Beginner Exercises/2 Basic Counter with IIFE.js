const contador = (function () {
  // Variable privada que almacena el estado del contador
  let cuenta = 0;

  return {
    // Método para incrementar el contador
    incrementar: function () {
      cuenta++;
    },
    // Método para obtener el valor actual del contador
    obtenerCuenta: function () {
      return cuenta;
    },
  };
})();

// Uso del contador
contador.incrementar();
contador.incrementar();

console.log(contador.obtenerCuenta());

contador.incrementar();

console.log(contador.obtenerCuenta());
