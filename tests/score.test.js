import { describe, it, expect, beforeEach } from "@jest/globals";
import { updateScore, resetGame } from "../src/tennis.js";

describe("Tennis Score", () => {
  beforeEach(() => {
    resetGame();
  });

  it("Empieza el juego en Love-Love", () => {
    expect(resetGame()).toBe("Love-Love");
  });

  it("Jugador 1 anota → 15-Love", () => {
    expect(updateScore(1)).toBe("15-Love");
  });

  it("Jugador 2 anota → 15-15", () => {
    updateScore(1);
    expect(updateScore(2)).toBe("15-15");
  });

  it("Jugador 1 vuelve a anotar → 30-15", () => {
    updateScore(1);
    updateScore(2);
    expect(updateScore(1)).toBe("30-15");
  });

  it("Ambos llegan a 40 → Deuce", () => {
    updateScore(1); // 15-0
    updateScore(1); // 30-0
    updateScore(1); // 40-0
    updateScore(2); // 40-15
    updateScore(2); // 40-30
    expect(updateScore(2)).toBe("Deuce");
  });

  it("Deuce → Advantage Player 1", () => {
    updateScore(1); updateScore(1); updateScore(1); // 40-0
    updateScore(2); updateScore(2); updateScore(2); // 40-40
    expect(updateScore(1)).toBe("Advantage Player 1");
  });

  it("Ventaja → Deuce de nuevo", () => {
    updateScore(1); updateScore(1); updateScore(1);
    updateScore(2); updateScore(2); updateScore(2);
    updateScore(1); // ventaja p1
    expect(updateScore(2)).toBe("Deuce");
  });

  it("Jugador 1 gana desde ventaja", () => {
    updateScore(1); updateScore(1); updateScore(1);
    updateScore(2); updateScore(2); updateScore(2);
    updateScore(1); // ventaja
    expect(updateScore(1)).toBe("Game Player 1");
  });

  it("Jugador 2 gana el juego directo (40-0)", () => {
    updateScore(2);
    updateScore(2);
    updateScore(2);
    expect(updateScore(2)).toBe("Game Player 2");
  });

  it("Reset reinicia a Love-Love", () => {
    updateScore(1);
    updateScore(2);
    expect(resetGame()).toBe("Love-Love");
  });
});
