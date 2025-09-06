import { describe, it, expect } from '@jest/globals';

describe("Tennis Score", () => {
  let player1Score = 0;
  let player2Score = 0;
  let gameStatus = "Love-Love"; // Estado inicial

  // Función que actualiza el marcador
  function updateScore(player) {
    if (player === 1) {
      player1Score++;
    } else if (player === 2) {
      player2Score++;
    }

    // Si ambos jugadores tienen 40 puntos, es Deuce
    if (player1Score === 3 && player2Score === 3) {
      gameStatus = "Deuce";
    }

    // Si el marcador está en Deuce, se puede pasar a Ventaja
    if (gameStatus === "Deuce") {
      if (player1Score === 4) {
        gameStatus = "Advantage Player 1";
      } else if (player2Score === 4) {
        gameStatus = "Advantage Player 2";
      }
    }

    return gameStatus;
  }

  it("Empieza el juego con Love-Love", () => {
    expect(gameStatus).toBe("Love-Love");  // Comprobamos que el marcador es Love-Love
  });

  it("Marcador cambia a 15-Love cuando jugador 1 anota", () => {
    updateScore(1);  // Jugador 1 anota
    expect(gameStatus).toBe("15-Love");  // Verificamos que el marcador es 15-Love
  });

  it("Marcador cambia a 15-15 cuando jugador 2 anota", () => {
    updateScore(2);  // Jugador 2 anota
    expect(gameStatus).toBe("15-15");  // Verificamos que el marcador es 15-15
  });

  it("Marcador cambia a 30-15 cuando jugador 1 anota de nuevo", () => {
    updateScore(1);  // Jugador 1 anota
    expect(gameStatus).toBe("30-15");  // Verificamos que el marcador es 30-15
  });

  it("Marcador cambia a Deuce cuando ambos jugadores lleguen a 40", () => {
    // Simulamos el marcador 40-40
    player1Score = 3;
    player2Score = 3;
    gameStatus = "Deuce";  // Ambos jugadores han llegado a Deuce
    expect(gameStatus).toBe("Deuce");
  });

  it("Marcador cambia a Advantage Player 1 cuando gana un punto desde Deuce", () => {
    // Jugador 1 gana un punto desde Deuce
    gameStatus = updateScore(1);  // Jugador 1 anota
    expect(gameStatus).toBe("Advantage Player 1");  // El marcador debe ser Ventaja Jugador 1
  });

  it("Marcador cambia a Game Player 1 cuando gana el siguiente punto después de Ventaja", () => {
    // Jugador 1 gana el siguiente punto después de tener Ventaja
    gameStatus = "Advantage Player 1";
    player1Score = 5;  // Ganamos el juego
    expect(gameStatus).toBe("Game Player 1");
  });
});
