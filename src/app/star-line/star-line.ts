
export class StarLine {
  private deltaX = 0;
  private deltaY = 0;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  width = 5;
  color ='#fff'
  padding = 0;

  startPoint: [number, number];
  endPoint: [number, number];

  constructor(
    from: [number, number],
    to: [number, number],
    color?: string
  ) {
    this.fromX = from[0];
    this.fromY = from[1];
    this.toX = from[0];
    this.toY = from[1];
    this.startPoint = [...from];
    this.endPoint = [...to];

    this.deltaX = this.setDelta(from[0], to[0]);
    this.deltaY = this.setDelta(from[1], to[1]);

    if(color) {
      this.color = color;
    }
  }

  private setDrawDirection(from: number, to: number): boolean {
    return from < to;
  }

  private changeCoordinate(coordinate: number, isIncrement: boolean, delta: number): number {
    const result = isIncrement ? coordinate += delta : coordinate -= delta;
    return result;
  }

  setCoordinates(): boolean {
    const isIncrementX = this.setDrawDirection(this.startPoint[0], this.endPoint[0]);
    const isIncrementY = this.setDrawDirection(this.startPoint[1], this.endPoint[1]);
    let status = false;

    if(this.isFinish(this.toX, this.endPoint[0], isIncrementX)) {
      this.toX = this.changeCoordinate(this.toX, isIncrementX, this.deltaX);
      status = true;
    }

    if(this.isFinish(this.toY, this.endPoint[1], isIncrementY)) {
      this.toY = this.changeCoordinate(this.toY, isIncrementY, this.deltaY);
      status = true;
    }

    return status;
  }

  private isFinish(startPoint: number, endPoint: number, direction: boolean) {
    return direction ? startPoint <= endPoint : startPoint >= endPoint;
  }

  private setDelta(from: number, to: number): number {
    return Math.abs(from - to) / 120;
  }
}