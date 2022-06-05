import {Scene} from "../scenes/scene.interface";
import {SceneText} from "../scene-text";
import {OBJECT_TYPE, Element} from "../models";

export class StartScene implements Scene{
  elements: Element[] = [];

  constructor() {
    this.elements = this.setElements();
  }

  setElements(): Element[]{
    const elements: Element[] = [];
    const centerX = 1930 / 2;
    const centerY = 800 / 2;


    elements.push({
      type: OBJECT_TYPE.TEXT,
      object: new SceneText({
        x: centerX,
        y: centerY,
        fontSize: 100,
        color: '#fff',
        text: '10 Stars',
        textAlign: 'center'
      })
    });

    elements.push({
      type: OBJECT_TYPE.TEXT,
      object: new SceneText({
        x: centerX,
        y: centerY + 50,
        fontSize: 30,
        color: '#fff',
        text: 'Left click to change a scene',
        textAlign: 'center',
      })
    });

    return elements;
  }
}