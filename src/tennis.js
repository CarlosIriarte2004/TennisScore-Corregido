let player1Score = 0;
let player2Score = 0;
let gameStatus = "Love-Love";

const scoreNames = ["Love", "15", "30", "40"];

/**
 * Actualiza el marcador según el jugador que anota
 * @param {number} player - Jugador que anota (1 o 2)
 * @returns {string} Estado actual del juego
 */
function updateScore(player) {
  if (player === 1) {
    player1Score++;
  } else if (player === 2) {
    player2Score++;
  }

  // Verifica quién ganó
  if (player1Score >= 4 && player1Score - player2Score >= 2) {
    gameStatus = "Game Player 1";
    return gameStatus;
  }
  if (player2Score >= 4 && player2Score - player1Score >= 2) {
    gameStatus = "Game Player 2";
    return gameStatus;
  }

  // Casos especiales: Deuce, Advantage
  if (player1Score >= 3 && player2Score >= 3) {
    if (player1Score === player2Score) {
      gameStatus = "Deuce";
    } else if (player1Score === player2Score + 1) {
      gameStatus = "Advantage Player 1";
    } else if (player2Score === player1Score + 1) {
      gameStatus = "Advantage Player 2";
    }
    return gameStatus;
  }

  // Casos normales
  gameStatus = `${scoreNames[player1Score]}-${scoreNames[player2Score]}`;
  return gameStatus;
}

/**
 * Reinicia el marcador del juego
 * @returns {string} Estado inicial del juego
 */
function resetGame() {
  player1Score = 0;
  player2Score = 0;
  gameStatus = "Love-Love";
  return gameStatus;
}

// Exporta las funciones para usar en los tests y en index.html
export { updateScore, resetGame };
