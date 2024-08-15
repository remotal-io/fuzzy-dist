import Keyboard from './keyboard';

class InScriptKeyboard extends Keyboard {
  protected kname: string = 'InScript';
  protected layout: { [key: string]: [number, number] } = {
    // Top Row (e.g., numbers and special characters)
    '1': [0, 0],
    '2': [0, 1],
    '3': [0, 2],
    '4': [0, 3],
    '5': [0, 4],
    '6': [0, 5],
    '7': [0, 6],
    '8': [0, 7],
    '9': [0, 8],
    '0': [0, 9],

    // Devanagari Consonants
    क: [1, 0],
    ख: [1, 1],
    ग: [1, 2],
    घ: [1, 3],
    ङ: [1, 4],
    च: [1, 5],
    छ: [1, 6],
    ज: [1, 7],
    झ: [1, 8],
    ञ: [1, 9],
    ट: [2, 0],
    ठ: [2, 1],
    ड: [2, 2],
    ढ: [2, 3],
    ण: [2, 4],
    त: [2, 5],
    थ: [2, 6],
    द: [2, 7],
    ध: [2, 8],
    न: [2, 9],

    // Devanagari Vowels and Additional Consonants
    अ: [3, 0],
    आ: [3, 1],
    इ: [3, 2],
    ई: [3, 3],
    उ: [3, 4],
    ऊ: [3, 5],
    ए: [3, 6],
    ऐ: [3, 7],
    ओ: [3, 8],
    औ: [3, 9],
    ऋ: [4, 0],
    क़: [4, 1],
    ख़: [4, 2],
    ग़: [4, 3],
    ज़: [4, 4],

    // Devanagari Matras and Special Characters
    'ा': [5, 0],
    'ि': [5, 1],
    'ी': [5, 2],
    'ु': [5, 3],
    'ू': [5, 4],
    'े': [5, 5],
    'ै': [5, 6],
    'ो': [5, 7],
    'ौ': [5, 8],
    'ं': [5, 9],
    'ः': [6, 0],
    'ँ': [6, 1],
    'ृ': [6, 2],
    'ॄ': [6, 3],
    'ॢ': [6, 4],
  };
}

export default InScriptKeyboard;
