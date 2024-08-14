abstract class Keyboard {
  protected abstract kname: string;
  protected abstract layout: { [key: string]: [number, number] };

  public get name() { return this.kname; }

  public getDistance(char1: string, char2: string): number {
    const pos1 = this.layout[char1.toLowerCase()];
    const pos2 = this.layout[char2.toLowerCase()];

    if (!pos1 || !pos2) return 2; // Arbitrary penalty for non-alphabetic characters or undefined keys

    const [x1, y1] = pos1;
    const [x2, y2] = pos2;

    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
}
export default Keyboard;
