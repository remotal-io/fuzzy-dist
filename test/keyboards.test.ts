import { describe, it, expect } from 'vitest';
import { QwertyKeyboard, QwertzKeyboard, AzertyKeyboard, TurkishFKeyboard, InScriptKeyboard } from "../src/keyboards";

describe('Keyboard getDistance method', () => {
  it('should return 0 for the same key in QwertyKeyboard', () => {
    const keyboard = new QwertyKeyboard();
    expect(keyboard.getDistance('a', 'a')).toBe(0);
  });

  it('should return correct distance for adjacent keys in QwertyKeyboard', () => {
    const keyboard = new QwertyKeyboard();
    expect(keyboard.getDistance('a', 's')).toBeCloseTo(1, 5);
  });

  it('should return correct distance for non-adjacent keys in QwertzKeyboard', () => {
    const keyboard = new QwertzKeyboard();
    expect(keyboard.getDistance('q', 'z')).toBeGreaterThan(1);
  });

  it('should return correct distance for adjacent keys in AzertyKeyboard', () => {
    const keyboard = new AzertyKeyboard();
    expect(keyboard.getDistance('a', 'z')).toBeCloseTo(1, 5);
  });

  it('should return correct distance for adjacent keys in TurkishFKeyboard', () => {
    const keyboard = new TurkishFKeyboard();
    expect(keyboard.getDistance('f', 'g')).toBeCloseTo(1, 5);
  });

  it('should return correct distance for adjacent keys in InScriptKeyboard', () => {
    const keyboard = new InScriptKeyboard();
    expect(keyboard.getDistance('क', 'ख')).toBeCloseTo(1, 5);
  });

  it('should return arbitrary distance for non-existent keys', () => {
    const keyboard = new QwertyKeyboard(); // This can be any keyboard
    expect(keyboard.getDistance('a', '!')).toBe(2); // because '!' is not in the layout
  });
});