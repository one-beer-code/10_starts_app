import {Star} from '../star/star';
import {OBJECT_TYPE} from '../models/object-type.enum';
import {Element} from '../models/element.interface';
import {Scene} from '../scenes';
import {StarLine} from "../star-line";
import {SceneText} from "../scene-text";

export class StarField {
  ctx: CanvasRenderingContext2D;
  width;
  height;
  canvas;
  elements: Array<Element> = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  drawStar(star: Star) {
    this.arc(star);
  }

  drawStarLine(line: StarLine) {
    this.line(line);
  }

  drawText(textScene: SceneText) {
    this.text(textScene);
  }

  line(line: StarLine) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.strokeStyle = line.color;
    this.ctx.lineWidth = line.width;
    this.ctx.moveTo(line.fromX, line.fromY);
    this.ctx.lineTo(line.toX, line.toY);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();
  }

  arc(start: Star) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = start.color;
    this.ctx.arc(start.x, start.y, start.radius, 0, Math.PI * 2, true);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }

  text(options: SceneText) {
    const {x, y, fontSize, color, text, textAlign, maxWidth, lineHeight, background } = options;

    const draText = () => {
      const words = text.split(" ");
      const countWords = words.length;
      let line = "";
      let marginLeft = x;
      let marginTop = y;
      const lines = [];

      for (let n = 0; n < countWords; n++) {
        const testLine = line + words[n] + " ";
        const testWidth = this.ctx.measureText(testLine).width;
        if (testWidth > maxWidth) {
          lines.push({
            text: line,
            x: marginLeft,
            y: marginTop
          })

          line = words[n] + " ";
          marginTop += lineHeight;
        }
        else {
          line = testLine;
        }
      }
      lines.push({
        text: line,
        x: marginLeft,
        y: marginTop
      });

      // draw background
      if(background) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = background;
        this.ctx.fillRect(x - 20, y - lineHeight, x + maxWidth, marginTop);
        this.ctx.closePath();
        this.ctx.restore();
      }

      // draw text
      lines.forEach(line => {
        this.ctx.fillText(line.text, line.x, line.y);
      });
    }

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = textAlign;
    draText();
    this.ctx.closePath();
    this.ctx.restore();
  }

  addElement(element: Element) {
    this.elements.push(element);
  }

  onMouseMove(cb: (x: number, y: number) => void) {
    this.canvas.addEventListener('mousemove', (e: any) => {
      cb(e.x - e.target.offsetLeft, e.y - e.target.offsetTop);
    });
  }

  drawElements(elements: Element[]) {
    elements
      .sort((a, b): any => a.type > b.type)
      .forEach(element => {
      if(element.type === OBJECT_TYPE.ARC) {
        this.drawStar(element.object as Star);
      }
      if(element.type === OBJECT_TYPE.LINE) {
        this.drawStarLine(element.object as StarLine);
      }
      if(element.type === OBJECT_TYPE.TEXT) {
        this.drawText(element.object as SceneText);
      }
    });

    // this.animateElements(elements);
  }

  setScene(scene: Scene) {
    this.drawElements(scene.elements);
  }

  clearScene() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  animateElements(elements: Element[]) {
    const lineElements = elements.filter( element => element.type === OBJECT_TYPE.LINE);
    // const lineElements = [elements[12]];
    let animationId: number;

    let timer = 0;
    const interval = 1000/60;
    let lastTime = 0;


    const animate = (timeStamp: number = 0) => {
      const isContinueAnimation: Array<boolean> = [];
      const deltaTime = timeStamp - lastTime || 0;
      lastTime = timeStamp;

      if(timer > interval) {
        this.clearScene();
        lineElements.forEach(lineElement => {
          const line = lineElement.object as StarLine;
          this.drawStarLine(line);
          isContinueAnimation.push(line.setCoordinates());
        });
      } else {
        timer += deltaTime;
      }

      animationId = requestAnimationFrame(animate.bind(this));
      const isStop = isContinueAnimation.every(status => !status);
      if(isContinueAnimation.length && isStop) {
        cancelAnimationFrame(animationId);
      }
    }
    animate();
  }
}