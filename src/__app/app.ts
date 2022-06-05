import {Screen} from "./sceen/screen";
import {Scenes, WelcomeScene} from "./scenes";
import {Game} from "./models";

export class App implements Game{
  screen: Screen;
  scenes: Scenes;

  constructor(
    private canvas: HTMLCanvasElement
  ) {
    this.screen = new Screen(canvas);
    this.scenes = new Scenes([new WelcomeScene(this)]);
  }

  private render() {

    // const lineElements = [elements[12]];
    let animationId: number;

    let timer = 0;
    const interval = 1000/60;
    let lastTime = 0;


    const animate = (timeStamp: number = 0) => {
      const deltaTime = timeStamp - lastTime || 0;
      lastTime = timeStamp;

      if(timer > interval) {
        this.screen.clearScreen();
        this.scenes.currentScene.render(timeStamp);
      } else {
        timer += deltaTime;
      }

      animationId = requestAnimationFrame(animate.bind(this));
      if(timeStamp > 5000) {
        cancelAnimationFrame(animationId);
      }
    }
    animate();
  }

  run() {
    this.render();
  }
}

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
if(canvas) {
  const app = new App(canvas);
  app.run();
}
