import { Text } from '../objects';

export class Screen {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;

  constructor(
    private canvas: HTMLCanvasElement
  ) {
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.width = canvas.width;
    this.height = canvas.height;
  }

  drawLine() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'red';
    this.ctx.lineWidth = 10;
    this.ctx.moveTo(20, 20);
    this.ctx.lineTo(50, 50);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();
  }

  drawText(textObj: Text) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.font = `${textObj.size}px sans-serif`;
    this.ctx.fillStyle = textObj.color;
    this.ctx.fillText(textObj.text, textObj.x, textObj.y);
    this.ctx.closePath();
    this.ctx.restore();
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}