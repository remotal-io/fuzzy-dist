import Keyboard from './keyboard';

class TurkishFKeyboard extends Keyboard {
  protected kname: string = 'Turkish F';
  protected layout: { [key: string]: [number, number] } = {
    f: [0, 0],
    g: [0, 1],
    ğ: [0, 2],
    ı: [0, 3],
    o: [0, 4],
    d: [0, 5],
    r: [0, 6],
    n: [0, 7],
    h: [0, 8],
    p: [0, 9],
    u: [1, 0],
    i: [1, 1],
    e: [1, 2],
    a: [1, 3],
    ü: [1, 4],
    t: [1, 5],
    k: [1, 6],
    m: [1, 7],
    l: [1, 8],
    y: [1, 9],
    v: [2, 0],
    c: [2, 1],
    ç: [2, 2],
    z: [2, 3],
    s: [2, 4],
    ş: [2, 5],
    b: [2, 6],
    j: [2, 7],
  };
}

export default TurkishFKeyboard;
