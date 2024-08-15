<p align="center">
  <!--<img src="https://raw.githubusercontent.com/remotal-io/fuzzy-dist/main/fuzzy-dist.png" alt="Fuzzy Dist" width=70>-->
  <h3 align="center">Fuzzy Dist</h3>
  <p align="center">Over simplistic fuzzy search library using Damerau-Levenshtein and optionally the keyboard layout to calculate distances.</p>
  <p align="center">
    <a href="https://github.com/remotal-io/fuzzy-dist/tree/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"/></a>
    <a href='https://coveralls.io/github/remotal-io/fuzzy-dist?branch=main'><img src='https://coveralls.io/repos/github/remotal-io/fuzzy-dist/badge.svg?branch=main' alt='Coverage Status' /></a>
    <a href='https://github.com/remotal-io/fuzzy-dist/actions/workflows/node.js.yml'><img src='https://github.com/remotal-io/fuzzy-dist/actions/workflows/node.js.yml/badge.svg' alt='Build Status' /></a>
    <a href='https://www.npmjs.com/package/fuzzy-dist'><img src='https://img.shields.io/npm/v/fuzzy-dist.svg?style=flat-square' alt='npm version' /></a>
    <a href='https://www.npmjs.com/package/fuzzy-dist'>npm</a>
  </p>
</p>

# FuzzyDist

`FuzzyDist` is a simple tool for calculating the Damerau-Levenshtein distance between two strings. This class also supports optional keyboard-specific distance calculations, allowing for more nuanced distance measurements based on the layout of different keyboards.

## Installation

`npm install fuzzy-dist`

## Usage

### 1. Basic Damerau-Levenshtein Distance Calculation

To calculate the standard Damerau-Levenshtein distance between two strings, simply instantiate the `FuzzyDist` class without specifying a keyboard layout.

```typescript
import FuzzyDist from 'fuzzy-dist';

const fuzzyDist = new FuzzyDist();
const distance = fuzzyDist.calculateDistance('kitten', 'sitten');
console.log(distance); // Outputs: 1
```

### 2. Damerau-Levenshtein Distance with Keyboard Layout Consideration

To include keyboard distance in the Damerau-Levenshtein calculation, you can specify a keyboard layout when instantiating the `FuzzyDist` class. This will add an additional layer of accuracy by taking into account the physical distance between keys on a specified keyboard.

```typescript
import FuzzyDist from 'fuzzy-dist';

const fuzzyDistQwerty = new FuzzyDist(FuzzyDist.QwertyKeyboard);
const distance = fuzzyDistQwerty.calculateDistance('kitten', 'sitten');
console.log(distance); // Outputs: 2

const distanceWithKeyboard = fuzzyDistQwerty.calculateDistance('kitten', 'oitten');
console.log(distanceWithKeyboard); // Outputs: 1.4

const distanceWithKeyboard = fuzzyDistQwerty.calculateDistance('kitten', 'jitten');
console.log(distanceWithKeyboard); // Outputs: 1
```

### 3. Finding the Minimum Distance from a List of Strings

The `FuzzyDist` class also provides a method to find the closest match to a target string from an array of strings.

```typescript
import FuzzyDist from './FuzzyDist';

const fuzzyDist = new FuzzyDist(FuzzyDist.QwertyKeyboard);
const target = 'hello';
const strings = ['hallo', 'hullo', 'hero', 'hell'];

const minDistance = fuzzyDist.getMinimumDistance(target, strings);
console.log(minDistance); // Outputs the minimum distance, e.g., 1
```

## Keyboard Layout Options

The `FuzzyDist` class supports the following keyboard layouts:

- **FuzzyDist.QwertyKeyboard**: QWERTY keyboard layout
- **FuzzyDist.QwertzKeyboard**: QWERTZ keyboard layout (common in Germany)
- **FuzzyDist.AzertyKeyboard**: AZERTY keyboard layout (common in France)
- **FuzzyDist.TurkishFKeyboard**: Turkish F keyboard layout
- **FuzzyDist.InScriptKeyboard**: InScript keyboard layout (common in India)

## Constructor

```typescript
constructor(keyboardId: number | null | undefined = null)
```

- **keyboardId**: The identifier for the keyboard layout to use. If `null`, the standard Damerau-Levenshtein distance is calculated without considering keyboard layout.

## Methods

### `calculateDistance(s1: string, s2: string): number`

Calculates the Damerau-Levenshtein distance between two strings, optionally considering keyboard layout if specified in the constructor.

### `getMinimumDistance(target: string, strings: string[]): number`

Finds and returns the minimum Damerau-Levenshtein distance between a target string and an array of strings.

## License

[MIT](https://github.com/remotal-io/fuzzy-dist/tree/main/LICENSE) © Remotal
