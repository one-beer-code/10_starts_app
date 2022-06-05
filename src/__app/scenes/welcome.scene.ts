import {Scene, Game} from "../models";
import {SCENE_TYPE} from "../constants";
import {Text} from "../objects";

export class WelcomeScene implements Scene {
  type: SCENE_TYPE = SCENE_TYPE.WELCOME;
  elements: Record<string, any> = {};

  constructor(public game: Game) {
    this.addElement('game_title', new Text('2048', {x: 10, y: 20}));
  }

  render(timeStamp?: number): void {
    const gameTitle = this.elements.game_title;
    if(gameTitle.isAnimate) {
      gameTitle.animate();
    }
    this.game.screen.drawText(gameTitle);
  }

  addElement(title: string, element: any) {
    this.elements[title] = element;
  }
}