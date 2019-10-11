export default abstract class Object {
  protected x: number;
  protected y: number;
  protected dx: number;
  protected dy: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.dx = x;
    this.dy = y;
  }
}
