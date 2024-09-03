// Variables en el scope global
var nombre = "Roosvelt";
let edad = 30;

console.log("Global Scope:");
console.log("Nombre:", nombre);
console.log("Edad:", edad);

// IIFE
(function () {
  // Variables locales dentro de la IIFE
  var nombre = "Enrique";
  let edad = 25;

  console.log("IIFE Scope:");
  console.log("Nombre:", nombre);
  console.log("Edad:", edad);
})();

// Verificamos que las variables globales no han sido afectadas
console.log("Global Scope After IIFE:");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
