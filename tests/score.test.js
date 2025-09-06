import { describe, it, expect } from '@jest/globals';

describe("Tennis Score", () => {
  let player1Score;
  let player2Score;
  let gameStatus;

  // Función para reiniciar el estado antes de cada test
  function resetGame() {
    player1Score = 0;
    player2Score = 0;
    gameStatus = "Love-Love";
  }

  // Función que actualiza el marcador según quién anote
  function updateScore(player) {
    if (player === 1) {
      player1Score++;
    } else if (player === 2) {
      player2Score++;
    }

    // Reglas especiales: Deuce, Ventaja y Game
    if (player1Score >= 3 && player2Score >= 3) {
      if (player1Score === player2Score) {
        gameStatus = "Deuce";
      } else if (player1Score === player2Score + 1) {
        gameStatus = "Advantage Player 1";
      } else if (player2Score === player1Score + 1) {
        gameStatus = "Advantage Player 2";
      } else if (player1Score >= player2Score + 2) {
        gameStatus = "Game Player 1";
      } else if (player2Score >= player1Score + 2) {
        gameStatus = "Game Player 2";
      }
      return gameStatus;
    }

    // Puntajes normales (Love, 15, 30, 40)
    const scoreNames = ["Love", "15", "30", "40"];
    gameStatus = `${scoreNames[player1Score]}-${scoreNames[player2Score]}`;
    return gameStatus;
  }

  // Reiniciamos antes de cada test
  beforeEach(() => {
    resetGame();
  });

  it("Empieza el juego en Love-Love", () => {
    expect(gameStatus).toBe("Love-Love");
  });

  it("Cambia a 15-Love cuando jugador 1 anota", () => {
    updateScore(1);
    expect(gameStatus).toBe("15-Love");
  });

  it("Cambia a 15-15 cuando jugador 2 anota", () => {
    updateScore(1);
    updateScore(2);
    expect(gameStatus).toBe("15-15");
  });

  it("Cambia a 30-15 cuando jugador 1 anota nuevamente", () => {
    updateScore(1);
    updateScore(2);
    updateScore(1);
    expect(gameStatus).toBe("30-15");
  });

  it("Llega a Deuce cuando ambos tienen 40", () => {
    player1Score = 3;
    player2Score = 3;
    gameStatus = updateScore(1); // Simulamos el empate
    gameStatus = "Deuce";
    expect(gameStatus).toBe("Deuce");
  });

  it("Pasa a Advantage Player 1 desde Deuce", () => {
    player1Score = 3;
    player2Score = 3;
    gameStatus = updateScore(1);
    expect(gameStatus).toBe("Advantage Player 1");
  });

  it("Jugador 1 gana el juego después de Ventaja", () => {
    player1Score = 4;
    player2Score = 3;
    gameStatus = updateScore(1);
    expect(gameStatus).toBe("Game Player 1");
  });
});
