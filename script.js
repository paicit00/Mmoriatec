const target = document.getElementById("target");
const scoreElement = document.getElementById("score");
const gameArea = document.getElementById("game-area");

let score = 0;
const maxScore = 50;

// Genera un número aleatorio entre min (inclusive) y max (exclusivo)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Mueve el número a una nueva posición aleatoria
function moveTarget() {
  const areaWidth = gameArea.clientWidth;
  const areaHeight = gameArea.clientHeight;
  const targetSize = target.offsetWidth;

  const maxX = areaWidth - targetSize;
  const maxY = areaHeight - targetSize;

  const randomX = getRandomInt(0, maxX);
  const randomY = getRandomInt(0, maxY);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";

  // Cambia el número mostrado
  target.textContent = getRandomInt(0, 10);
}

// Cada vez que haces clic en el número
target.addEventListener("click", () => {
  score++;
  scoreElement.textContent = `${score} / ${maxScore}`;

  if (score >= maxScore) {
    alert("¡Felicidades! 🎉 ¡Atrápaste 50 números!");
    score = 0;
    scoreElement.textContent = `0 / ${maxScore}`;
  }

  moveTarget();
});

// Inicializar el primer número
moveTarget();
