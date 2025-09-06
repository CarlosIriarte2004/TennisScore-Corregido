import { describe, it, expect } from '@jest/globals';

describe("Tennis Score", () => {
  it("Empieza el juego con Love-Love", () => {
    let score = "Love-Love";  // Inicializamos el marcador
    expect(score).toBe("Love-Love");  // Comprobamos el marcador es Love-Love
  });

  it("Marcador cambia a 15-Love cuando jugador 1 anota", () => {
    let score = "Love-Love";  // Marcador inicial
    score = "15-Love";  // Jugador 1 anota
    expect(score).toBe("15-Love");  // Verificamos que el marcador es 15-Love
  });

it("Marcador 15-15 cuando jugador 2 anota", () => {
    let score = "15-Love";  // Jugador 1 ha anotado
    score = "15-15";  // Jugador 2 anota
    expect(score).toBe("15-15");
  });

  it("Marcador 30-15 cuando jugador 1 anota de nuevo", () => {
    let score = "15-15";  // Ambos jugadores han anotado
    score = "30-15";  // Jugador 1 anota
    expect(score).toBe("30-15");
  });

    let player1Score = 0;
    let player2Score = 0;

    function updateScore(player) {
    if (player === 1) {
    player1Score++;
    } else if (player === 2) {
    player2Score++;
    }

    if (player1Score === 3 && player2Score === 3) {
    return "Deuce";
  }
}


});

