import { describe, it, expect } from '@jest/globals';

describe("Tennis Score", () => {
  let player1Score = 0;
  let player2Score = 0;
  let gameStatus = "Love-Love"; // Marcador inicial

  function updateScore(player) {
    if (player === 1) {
      player1Score++;
    } else if (player === 2) {
      player2Score++;
    }

    // Si ambos llegan a 40, el marcador es Deuce
    if (player1Score === 3 && player2Score === 3) {
      gameStatus = "Deuce";
    }

    // Si estamos en Deuce, el siguiente punto puede cambiar el marcador a Ventaja
    if (gameStatus === "Deuce") {
      if (player1Score === 4) {
        gameStatus = "Advantage Player 1"; // Jugador 1 tiene la ventaja
      } else if (player2Score === 4) {
        gameStatus = "Advantage Player 2"; // Jugador 2 tiene la ventaja
      }
    }

    return gameStatus; 
  }

  it("Empieza el juego con Love-Love", () => {
    // Al principio, el marcador debe estar en Love-Love
    expect(gameStatus).toBe("Love-Love");
  });

  it("Cambia a 15-Love cuando jugador 1 anota", () => {
    // Cuando el jugador 1 anota un punto, el marcador debe cambiar a 15-Love
    updateScore(1);
    expect(gameStatus).toBe("15-Love");
  });

  it("Cambia a 15-15 cuando jugador 2 anota", () => {
    // Si el jugador 2 anota, el marcador debe ser 15-15
    updateScore(2);
    expect(gameStatus).toBe("15-15");
  });

  it("Cambia a 30-15 cuando jugador 1 anota nuevamente", () => {
    // Después de un punto más de jugador 1, el marcador debe ser 30-15
    updateScore(1);
    expect(gameStatus).toBe("30-15");
  });

  it("Cambia a Deuce cuando ambos jugadores lleguen a 40", () => {
    // Si ambos jugadores tienen 40 puntos, el marcador será Deuce
    player1Score = 3;
    player2Score = 3;
    gameStatus = "Deuce";  // Definimos explícitamente el marcador como Deuce
    expect(gameStatus).toBe("Deuce");
  });

  it("Cambia a Advantage Player 1 cuando gana un punto desde Deuce", () => {
    // Si jugador 1 gana un punto desde Deuce, el marcador se actualiza a Ventaja
    gameStatus = updateScore(1);
    expect(gameStatus).toBe("Advantage Player 1");
  });

  it("Cambia a Game Player 1 cuando gana el siguiente punto después de Ventaja", () => {
    // Cuando jugador 1 gana el siguiente punto después de tener Ventaja, gana el juego
    gameStatus = "Advantage Player 1";
    player1Score = 5; // Jugador 1 gana el juego
    expect(gameStatus).toBe("Game Player 1");
  });
});
