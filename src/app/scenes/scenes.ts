import {Scene} from './scene.interface';

export class Scenes {

  constructor(
    public scenes: Scene[]
  ) {}

  addScene(scene: Scene) {
    this.scenes.push(scene);
  }
}