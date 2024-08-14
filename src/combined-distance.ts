import { type Keyboard } from "./keyboards";

class CombinedDistance {
  private keyboard: Keyboard | null;

  constructor(keyboard: Keyboard | null = null) {
    this.keyboard = keyboard;
  }

  /**
   * Credit to https://github.com/gustaveWPM/Typescript-Damerau-Levenshtein/  
   * Calculates the combined Damerau-Levenshtein between two strings and optional keyboard distance as well.
   */
  public calculateDistance(s1: string, s2: string): number {
    if (s1 === s2) return 0;

    const [s1len, s2len] = [s1.length, s2.length];
    const matrix: number[][] = Array.from({ length: s1len + 1 }, () =>
      new Array(s2len + 1).fill(0)
    );

    for (let y = 1; y <= s1len; y++) matrix[y][0] = y;
    for (let x = 1; x <= s2len; x++) matrix[0][x] = x;

    for (let y = 1; y <= s1len; y++) {
      for (let x = 1; x <= s2len; x++) {
        if (s1[y - 1] === s2[x - 1]) {
          matrix[y][x] = matrix[y - 1][x - 1];
        } else {
          // pure implementation
          //   matrix[y][x] = 1 + Math.min(matrix[y - 1][x], matrix[y][x - 1], matrix[y - 1][x - 1]);
          // implementation including optional keyboard distance
          const substitutionCost = this.keyboard ? this.keyboard.getDistance(s1[y - 1], s2[x - 1]) : 1;
          matrix[y][x] = Math.min(
            matrix[y - 1][x] + 1,                   // Deletion
            matrix[y][x - 1] + 1,                   // Insertion
            matrix[y - 1][x - 1] + substitutionCost // Substitution with optional keyboard distance
          );
          if (
            y > 1 &&
            x > 1 &&
            s1[y - 1] === s2[x - 2] &&
            s1[y - 2] === s2[x - 1]
          ) {
            matrix[y][x] = Math.min(matrix[y][x], matrix[y - 2][x - 2] + 1);
          }
        }
      }
    }
    return matrix[s1len][s2len];
  }

}

export default CombinedDistance;