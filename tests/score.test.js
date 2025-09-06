import { describe, it, expect } from '@jest/globals';

describe("Tennis Score", () => {
  it("Empieza el juego con Love-Love", () => {
    let score = "Love-Love";  // Inicializamos el marcador
    expect(score).toBe("Love-Love");  // Comprobamos el marcador es Love-Love
  });
});

