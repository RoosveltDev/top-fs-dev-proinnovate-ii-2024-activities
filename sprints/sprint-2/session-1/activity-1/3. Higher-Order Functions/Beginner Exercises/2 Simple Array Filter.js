function filterArray(arr, callback) {
  // Creamos un nuevo array para almacenar los elementos que cumplen con el criterio del callback
  const result = [];

  // Iteramos sobre cada elemento del array
  for (let i = 0; i < arr.length; i++) {
    // Si el elemento cumple con el criterio del callback, lo añadimos al array result
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Ejemplo de uso
const numbers = [1, 2, 3, 4, 5];
const evens = filterArray(numbers, (x) => x % 2 === 0);
console.log(evens);
