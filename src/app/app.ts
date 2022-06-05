import {StarField} from './start-field/start-field';
import {ConstellationScene, Scene, StartScene, TextScene, Text_2Scene, FinalScene} from "./scenes";
import { Leo } from "./constellations";

class App {
  scenes: Scene[] = [];
  currentScene = 0;

  constructor(
    public canvas: HTMLCanvasElement,
    private field: StarField
  ) {
    this.scenes = this.setScenes();
  }

  private setScenes(): Scene[] {
    return [
      new StartScene(),
      new ConstellationScene(Leo),
      new TextScene(Leo),
      new Text_2Scene(Leo),
      new FinalScene(Leo)
    ]
  }

  changeScene(step: boolean | number) {
    this.switchScene(step);
    this.playScene();
  }

  switchScene(step: boolean | number) {
    if(typeof step === 'boolean') {
      step ? this.currentScene++ : this.currentScene--;
      if(this.currentScene < 0) {
        this.currentScene = 0;
      }
      if(this.currentScene > this.scenes.length - 1) {
        this.currentScene = this.scenes.length - 1;
      }
    }
    if(typeof step === 'number') {
      this.currentScene = step;
    }
  }

  playScene() {
    this.field.clearScene();
    this.field.setScene(this.getCurrentScene());
  }

  getCurrentScene(): Scene {
    return this.scenes[this.currentScene];
  }

  // events
  onClick(cb: (x: number, y: number) => void) {
    this.canvas.addEventListener('click', (e: any) => {
      cb(e.x - e.target.offsetLeft, e.y - e.target.offsetTop);
    });
  }
}








window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const app = new App(canvas, new StarField(canvas));

  // click event
  app.onClick((x, y) => {
    app.changeScene(true);
  });

  app.playScene();


  // const field = new StarField(canvas);
  // const helper = new PointHelper(ctx, canvas.width, canvas.height);

  const startScene = new StartScene();
  // field.setScene(startScene);

  const constellationScene = new ConstellationScene(Leo);
  // field.setScene(constellationScene);


  // field.onMouseMove((x: number, y: number) => {
  //   // helper.drawLines(x, y);
  //   // field.drawElements();
  // });


  /*  canvas.addEventListener('click', (e: any) => {
      const [x,y] = [e.x - e.target.offsetLeft, e.y - e.target.offsetTop];
      const star = new Star(x, y);
      field.addElement({
        type: OBJECT_TYPE.ARC,
        object: star
      });
    });*/
}