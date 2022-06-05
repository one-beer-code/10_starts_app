import {Scene} from "./scene.interface";
import {SceneText} from "../scene-text";
import {OBJECT_TYPE, Element, Constellation} from "../models";
import {Star} from "../star";
import {StarLine} from "../star-line";

export class Text_2Scene implements Scene{
  elements: Element[] = [];
  constructor(
    constellation: Constellation
  ) {
    this.elements = this.setElements(constellation);
  }


  setElements(constellation: Constellation): Element[] {
    const elements: Element[] = []


    constellation.stars.forEach((star, index: number) => {
      // add stars
      const starElem: Element = {
        type: OBJECT_TYPE.ARC,
        object: new Star({
          id: index,
          x: star.coordinates[0] + 350,
          y: star.coordinates[1]
        })
      };
      elements.push(starElem);
    });

    // add star lines
    const stars = elements.filter( elem => elem.type === OBJECT_TYPE.ARC);
    stars.forEach((starElem, index) => {
      const currentStar = starElem.object as Star;
      // add stars line
      if(constellation.connectTo[index].length) {
        constellation.connectTo[index].forEach(starIndex => {
          const toStar = stars[starIndex].object as Star;
          const starLineElem: Element = {
            type: OBJECT_TYPE.LINE,
            object: new StarLine([currentStar.x, currentStar.y], [toStar.x, toStar.y])
          };
          elements.push(starLineElem);
        })
      }
    });


    // set text
    const text: Element = {
      type: OBJECT_TYPE.TEXT,
      object: new SceneText({
        x: 20,
        y: 70,
        fontSize: 60,
        color: '#fff',
        text: '10 Stars'
      })
    }
    const textDescription: Element = {
      type: OBJECT_TYPE.TEXT,
      object: new SceneText({
        x: 20,
        y: 120,
        fontSize: 20,
        color: '#fff',
        maxWidth: 900,
        lineHeight: 30,
        text: `Но с каждым маленьким и большим шагом, она будет расширяться. Я очень надеюсь что в скором будущем, эта галактика будет явью. Я тебя очень люблю.
Я понимаю, что я тут написал много. И снова, я это ещё почистило. Это я к тому, чтоу меня скорее просто устанут пальцы печатать, чем я смогу сказать как сильно я тебя люблю.`
      })
    }
    const textNext: Element = {
      type: OBJECT_TYPE.TEXT,
      object: new SceneText({
        x: 20,
        y: 790,
        fontSize: 20,
        color: 'red',
        maxWidth: 600,
        lineHeight: 30,
        text: `Left click to switch scene`
      })
    }
    elements.push(text, textDescription, textNext);

    return elements;
  }
}