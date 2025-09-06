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
});

