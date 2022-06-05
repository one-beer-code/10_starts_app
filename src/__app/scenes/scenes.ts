import {SCENE_TYPE} from '../constants';
import {Scene} from '../models';

export class Scenes {
  currentScene!: Scene;
  scenes: Map<SCENE_TYPE, Scene> = new Map();

  constructor(scenes: Array<Scene>) {
    // add scenes
    scenes.forEach(scene => this.addScene(scene));

    // set default scene
    const welcomeScene = this.scenes.get(SCENE_TYPE.WELCOME);
    if(welcomeScene) {
      this.currentScene = welcomeScene;
    } else {
      throw new Error('Provide the Welcome Scene');
    }
  }

  addScene(scene: Scene) {
    this.scenes.set(scene.type, scene);
  }

  switchScene(type: SCENE_TYPE): Scene {
    const scene = this.scenes.get(type);
    if(scene) {
      this.currentScene = scene;
    }
    throw new Error('The scene not found.');
  }
}