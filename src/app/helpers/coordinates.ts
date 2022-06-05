export class PointHelper {
  ctx;
  width;
  height;

  constructor(ctx: any, width: any, height: any) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }
  drawLines(x: any, y: any) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawLineX(x);
    this.drawLineY(y);
    this.setPoint(x, y);
  }
  drawLineY(y: any) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = 'red';
    this.ctx.strokeStyle = 'blue';
    this.ctx.lineWidth = 2;
    this.ctx.moveTo(0, y);
    this.ctx.lineTo(this.width, y);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();
  }
  drawLineX(x: any) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = 'red';
    this.ctx.strokeStyle = 'blue';
    this.ctx.lineWidth = 2;
    this.ctx.moveTo(x, 0);
    this.ctx.lineTo(x, this.height);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();
  }

  drawPoint(x: any, y: any) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = 'red';
    this.ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }

  text(x: any, y: any) {
    this.ctx.save();
    this.ctx.beginPath();

    this.ctx.font = '20px serif';
    this.ctx.fillStyle = 'red';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(`${x} / ${y}`, x, y - 10);

    this.ctx.closePath();
    this.ctx.restore();
  }

  setPoint(x: any, y: any) {
    this.drawPoint(x,y);
    this.text(x, y);
  }
}
