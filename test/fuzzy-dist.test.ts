import { describe, it, expect } from 'vitest';
import FuzzyDist from '../src';
import {
  QwertyKeyboard,
  QwertzKeyboard,
  AzertyKeyboard,
  TurkishFKeyboard,
  InScriptKeyboard,
} from '../src/keyboards';

describe('FuzzyDist', () => {
  it('should correctly calculate the Damerau-Levenshtein distance with default keyboard (null)', () => {
    const fuzzyDist = new FuzzyDist();
    const distance = fuzzyDist.calculateDistance('hello', 'hallo');
    expect(fuzzyDist.kbd).toBeNull();
    expect(distance).toBe(1);
  });

  it('should correctly instanciate the keyboard attribute using QwertyKeyboard', () => {
    const fuzzyDist = new FuzzyDist(FuzzyDist.QwertyKeyboard);
    const distance = fuzzyDist.calculateDistance('hello', 'hallo');
    expect(fuzzyDist.kbd).toBeInstanceOf(QwertyKeyboard);
    expect(distance).toBe(2);
  });

  it('should correctly instanciate the keyboard attribute using QwertzKeyboard', () => {
    const fuzzyDist = new FuzzyDist(FuzzyDist.QwertzKeyboard);
    expect(fuzzyDist.kbd).toBeInstanceOf(QwertzKeyboard);
  });

  it('should correctly instanciate the keyboard attribute using AzertyKeyboard', () => {
    const fuzzyDist = new FuzzyDist(FuzzyDist.AzertyKeyboard);
    expect(fuzzyDist.kbd).toBeInstanceOf(AzertyKeyboard);
  });

  it('should correctly instanciate the keyboard attribute using TurkishFKeyboard', () => {
    const fuzzyDist = new FuzzyDist(FuzzyDist.TurkishFKeyboard);
    expect(fuzzyDist.kbd).toBeInstanceOf(TurkishFKeyboard);
  });

  it('should correctly instanciate the keyboard attribute using InScriptKeyboard', () => {
    const fuzzyDist = new FuzzyDist(FuzzyDist.InScriptKeyboard);
    expect(fuzzyDist.kbd).toBeInstanceOf(InScriptKeyboard);
  });

  it('should return the minimum Damerau-Levenshtein distance from an array of strings', () => {
    const fuzzyDist = new FuzzyDist(FuzzyDist.QwertyKeyboard);
    const target = 'hello';
    const strings = ['hallo', 'hullo', 'hero', 'hell'];
    const minDistance = fuzzyDist.getMinimumDistance(target, strings);
    expect(minDistance).toBe(1); // 'hell' has a distance of 1 from 'hello'
  });

  it('should return the minimum Damerau-Levenshtein distance when target string has no close matches', () => {
    const fuzzyDist = new FuzzyDist(FuzzyDist.QwertyKeyboard);
    const target = 'goodbye';
    const strings = ['hello', 'hullo', 'hero', 'hell'];
    const minDistance = fuzzyDist.getMinimumDistance(target, strings);
    expect(minDistance).toBeGreaterThan(1);
  });

  it('should handle an empty array of strings and return Infinity for minimum distance', () => {
    const fuzzyDist = new FuzzyDist(FuzzyDist.QwertyKeyboard);
    const target = 'hello';
    const strings: string[] = [];
    const minDistance = fuzzyDist.getMinimumDistance(target, strings);
    expect(minDistance).toBe(Infinity);
  });

  it('should handle target string being empty and calculate distances correctly', () => {
    const fuzzyDist = new FuzzyDist(FuzzyDist.QwertyKeyboard);
    const target = '';
    const strings = ['hello', 'hullo', 'hero', 'hell'];
    const minDistance = fuzzyDist.getMinimumDistance(target, strings);
    expect(minDistance).toBe(4); // Distance between '' and 'hell' is 4
  });
});
