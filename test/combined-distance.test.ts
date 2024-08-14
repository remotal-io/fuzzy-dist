import { describe, it, expect } from 'vitest';
import CombinedDistance from '../src/combined-distance';
import { QwertyKeyboard } from '../src/keyboards';

describe('calculateDistance', () => {
  it('should return 0 for identical strings', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('hello', 'hello')).toBe(0);
  });

  it('should return the correct distance for simple substitution', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('kitten', 'sitten')).toBe(1);
  });

  it('should handle insertions correctly', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('kitten', 'kitteny')).toBe(1);
    expect(cd.calculateDistance('kitten', 'kiteny')).toBe(2);
  });

  it('should handle deletions correctly', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('kitten', 'kiten')).toBe(1);
    expect(cd.calculateDistance('kitten', 'iten')).toBe(2);
  });

  it('should handle transpositions correctly', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('flaw', 'flwa')).toBe(1);
    expect(cd.calculateDistance('abcdef', 'abcfde')).toBe(2);
  });

  it('should return correct distance for completely different strings', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('abc', 'xyz')).toBe(3);
  });

  it('should handle strings with different lengths', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('short', 'longerstring')).toBe(10);
  });

  it('should handle empty strings', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('', 'abc')).toBe(3);
    expect(cd.calculateDistance('abc', '')).toBe(3);
    expect(cd.calculateDistance('', '')).toBe(0);
  });

  it('should handle strings with special characters', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('hello!', 'hello')).toBe(1);
    expect(cd.calculateDistance('hello!', 'h3llo!')).toBe(1);
  });

  it('should work with non-Latin alphabets - Cyrillic', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('привет', 'пивет')).toBe(1);
    expect(cd.calculateDistance('привет', 'пирвет')).toBe(1);
  });

  it('should work with non-Latin alphabets - Arabic', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('سلام', 'سالم')).toBe(1);
    expect(cd.calculateDistance('مرحبا', 'مراحب')).toBe(2);
  });

  it('should work with non-Latin alphabets - Devanagari', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('नमस्ते', 'नमस्त')).toBe(1);
    expect(cd.calculateDistance('नमस्ते', 'नस्मते')).toBe(2);
  });

  it('should handle strings with mixed alphabets', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('helloمرحبا', 'helloمرحبا')).toBe(0);
    expect(cd.calculateDistance('helloمرحبا', 'halloمرحبا')).toBe(1);
    expect(cd.calculateDistance('helloمرحبا', 'helloسلام')).toBe(5);
  });

  it('should handle strings with diacritics and accents', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('café', 'cafe')).toBe(1);
    expect(cd.calculateDistance('mañana', 'manana')).toBe(1);
    expect(cd.calculateDistance('über', 'uber')).toBe(1);
  });

  it('should handle long strings efficiently', () => {
    const cd = new CombinedDistance();
    const longStringA = 'a'.repeat(1000);
    const longStringB = 'a'.repeat(999) + 'b';
    expect(cd.calculateDistance(longStringA, longStringB)).toBe(1);
  });

  it('should work with unicode characters', () => {
    const cd = new CombinedDistance();
    expect(cd.calculateDistance('😊', '😢')).toBe(1);
    expect(cd.calculateDistance('😊😊', '😊😢')).toBe(1);
  });
});

describe('calculateDistanceWithQwerty', () => {
  it('should return 0 for identical strings', () => {
    const cd = new CombinedDistance(new QwertyKeyboard());
    expect(cd.calculateDistance('hello', 'hello')).toBe(0);
  });

  it('should return 1 for directly neihbouring substituted chars', () => {
    const cd = new CombinedDistance(new QwertyKeyboard());
    expect(cd.calculateDistance('kitten', 'litten')).toBe(1);
    expect(cd.calculateDistance('kitten', 'jitten')).toBe(1);
    expect(cd.calculateDistance('kitten', 'iitten')).toBe(1);
    expect(cd.calculateDistance('kitten', ',itten')).toBe(1);
  });
  it('should return 1.x for diagonally neihbouring substituted chars', () => {
    const cd = new CombinedDistance(new QwertyKeyboard());
    expect(cd.calculateDistance('kitten', 'oitten')).toBeCloseTo(1, 0);
    expect(cd.calculateDistance('kitten', 'uitten')).toBeCloseTo(1, 0);
    expect(cd.calculateDistance('kitten', 'mitten')).toBeCloseTo(1, 0);
    expect(cd.calculateDistance('kitten', '.itten')).toBeCloseTo(1, 0);
  });
  it('should return 2 for not neihbouring substituted chars', () => {
    const cd = new CombinedDistance(new QwertyKeyboard());
    expect(cd.calculateDistance('kitten', 'sitten')).toBe(2);
  });

});