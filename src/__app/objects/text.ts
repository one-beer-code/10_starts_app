import {TextOption} from '../models';

export class Text{
  private velocity = 1;
  private ctx!: CanvasRenderingContext2D;
  x: number;
  y: number;
  color = '#fff';
  size = 20;
  isAnimate = true;


  constructor(
    public text: string,
    private option: TextOption
  ) {
    const {x, y, color, size, isAnimate} = this.option;
    this.x = x;
    this.y = y;

    if(color) {
      this.color = color;
    }
    if(size) {
      this.size = size;
    }
    if(isAnimate !== undefined) {
      this.isAnimate = isAnimate;
    }
  }

  private drawCaret() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.font = `30px sans-serif`;
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('rext', 40, 50);
    this.ctx.closePath();
    this.ctx.restore();
  }

  animate() {
    this.x += this.velocity;
  }

  render(ctx: CanvasRenderingContext2D) {
    if(!this.isAnimate) {
      return;
    }
    this.ctx = ctx;
    this.drawCaret()
  }

}