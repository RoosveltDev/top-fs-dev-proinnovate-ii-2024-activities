function greet(name) {
  // Retornamos una función que toma un mensaje de saludo
  return function (message) {
    console.log(`${message}, ${name}!`);
  };
}

const greetJohn = greet("John");
greetJohn("Hello");
greetJohn("Good morning");
