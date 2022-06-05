export class Star {
  public radius = 10;
  public color = '#fff';
  id: number;
  x: number;
  y: number;

  constructor(
    options: {
      id: number,
      x: number,
      y: number,
      radius?: number,
      color?: string
    }
  ) {

    const {id, x, y, radius, color} = options;

    this.id = id;
    this.x = x;
    this.y = y;
    if(radius) {
      this.radius = radius;
    }
    if(color) {
      this.color = color;
    }
  }

}