// Generar un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const guess = parseInt(guessInput.value);
  
  if (isNaN(guess)) {
    message.textContent = "Por favor, introduce un número válido.";
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    message.textContent = `¡Felicidades! ¡Adivinaste el número en ${attempts} intento(s)!`;
    guessInput.disabled = true;
  } else if (guess < randomNumber) {
    message.textContent = "Intenta con un número más alto.";
  } else {
    message.textContent = "Intenta con un número más bajo.";
  }
}