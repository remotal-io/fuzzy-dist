import CombinedDistance from './combined-distance';
import {
  Keyboard,
  QwertyKeyboard,
  QwertzKeyboard,
  AzertyKeyboard,
  TurkishFKeyboard,
  InScriptKeyboard,
} from './keyboards';

class FuzzyDist {
  public static QwertyKeyboard = 1;
  public static QwertzKeyboard = 2;
  public static AzertyKeyboard = 3;
  public static TurkishFKeyboard = 4;
  public static InScriptKeyboard = 5;
  private keyboard: Keyboard | null | undefined;
  private combinedDistance: CombinedDistance;

  /**
   * Calculates the combined Damerau-Levenshtein between two strings and optional keyboard distance as well.
   * 
   * Not specifying a Keyboard will run the standard Damerau-Levenshtein Distance algorithm.
   *
      ```
      const fd = new FuzzyDist();
      fd.calculateDistance('kitten', 'sitten'); // => 1
      ```
   * Specifying a Keyboard will run Damerau-Levenshtein Distance algorithm and add the Keyboard Distance algorithm for a more nuanced distance calculation.
      ```
      const fd = new FuzzyDist(FuzzyDist.QwertyKeyboard);
      fd.calculateDistance('kitten', 'litten'); // => 1
      fd.calculateDistance('kitten', 'oitten'); // => 1.4
      fd.calculateDistance('kitten', 'sitten'); // => 2
      ```
   * 
   * @param {number} keyboardId one of `FuzzyDist.(QwertyKeyboard | QwertzKeyboard | AzertyKeyboard | TurkishFKeyboard | InScriptKeyboard)`
   */
  constructor(keyboardId: number | null | undefined = null) {
    this.keyboard = this.getKeyboardById(keyboardId);
    this.combinedDistance = new CombinedDistance(this.keyboard);
  }

  /**
   * Calculates the combined Damerau-Levenshtein between two strings and optional keyboard distance as well.
   *
   * @param {string} s1 The first string.
   * @param {string} s2 The second string.
   * @returns {number} The combined distance.
   */
  public calculateDistance(s1: string, s2: string): number {
    return this.combinedDistance.calculateDistance(s1, s2);
  }

  public getMinimumDistance(target: string, strings: string[]): number {
    let minDistance = Infinity;

    for (const str of strings) {
      const distance = this.calculateDistance(target, str);
      if (distance < minDistance) {
        minDistance = distance;
      }
    }

    return minDistance;
  }

  public get kbd() {
    return this.keyboard;
  }

  private getKeyboardById(keyboardId: number | null | undefined): Keyboard | null {
    switch (keyboardId) {
      case FuzzyDist.QwertyKeyboard:
        return new QwertyKeyboard();
      case FuzzyDist.QwertzKeyboard:
        return new QwertzKeyboard();
      case FuzzyDist.AzertyKeyboard:
        return new AzertyKeyboard();
      case FuzzyDist.TurkishFKeyboard:
        return new TurkishFKeyboard();
      case FuzzyDist.InScriptKeyboard:
        return new InScriptKeyboard();
      default:
        return null;
    }
  }
}

export default FuzzyDist;
