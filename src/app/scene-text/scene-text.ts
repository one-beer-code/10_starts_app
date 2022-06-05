
export class SceneText {
  color = '#fff'
  x: number;
  y: number;
  lineHeight = 20;
  maxWidth = 1900;
  fontSize = 20;
  text: string;
  textAlign: CanvasTextAlign = "left";
  background: string = '';

  constructor(options: {
    x: number,
    y: number,
    fontSize?: number,
    text: string,
    color?: string,
    textAlign?: CanvasTextAlign,
    maxWidth?: number,
    lineHeight?: number,
    background?: string
  }) {
    const {x, y, fontSize, text, color, textAlign, maxWidth, lineHeight, background} = options;
    this.x = x;
    this.y = y;
    this.text = text;
    if(fontSize) {
      this.fontSize = fontSize;
    }
    if(color) {
      this.color = color;
    }
    if(textAlign) {
      this.textAlign = textAlign;
    }
    if(maxWidth) {
      this.maxWidth = maxWidth;
    }
    if(lineHeight) {
      this.lineHeight = lineHeight;
    }
    if(background) {
      this.background = background;
    }
  }
}