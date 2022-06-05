import {Scene} from "./scene.interface";
import {Constellation, Element, OBJECT_TYPE} from "../models";
import {Star} from "../star";
import {SceneText} from "../scene-text";
import {StarLine} from "../star-line";

export class FinalScene implements Scene{
  elements: Element[] = []
  starAmount = 1000;
  leoColor = '#fff';

  constructor(
    constellation: Constellation
  ) {
    this.elements = this.setElements(constellation);
  }

  setElements(constellation: Constellation): Element[] {
    const elements = this.generateStars(this.starAmount, ['#ffc8c8', '#c3d2ff', '#ffffd6', '#fff'], [1, 8]);


    constellation.stars.forEach((star, index: number) => {
      // add stars
      const starElem: Element = {
        type: OBJECT_TYPE.ARC,
        object: new Star({
          id: index,
          x: star.coordinates[0],
          y: star.coordinates[1],
          color: this.leoColor
        })
      };

      // add star text
      if(star.title) {
        (starElem.object as Star).radius = 20;
      }

      elements.push(starElem);
      // add stars line
      if(constellation.connectTo[index].length) {
        constellation.connectTo[index].forEach(starIndex => {
          const starLineElem: Element = {
            type: OBJECT_TYPE.LINE,
            object: new StarLine(star.coordinates, constellation.stars[starIndex].coordinates, this.leoColor)
          };
          elements.push(starLineElem);
        })
      }
    });

    // text
    const text: Element = {
      type: OBJECT_TYPE.TEXT,
      object: new SceneText({
        x: 20,
        y: 40,
        fontSize: 20,
        color: '#fff',
        maxWidth: 600,
        lineHeight: 30,
        text: `Это финальная сцена. Мне многое хотелось бы даже тут переделать и доделать. Но времени нету. Я верю что наше созвездие, станет только больше. Я тебя очень люблю. И то что я тут налепил, это такие мелочи.`,
        background: '#181e2d'
      })
    };
    const textI: Element = {
      type: OBJECT_TYPE.TEXT,
      object: new SceneText({
        x: 20,
        y: 790,
        fontSize: 40,
        color: '#fff',
        maxWidth: 600,
        lineHeight: 30,
        text: `Я`,
      })
    }

    const textLove: Element = {
      type: OBJECT_TYPE.TEXT,
      object: new SceneText({
        x: 70,
        y: 790,
        fontSize: 40,
        color: '#0058b5',
        maxWidth: 600,
        lineHeight: 30,
        text: `Тебе`,
      })
    }

    const textYou: Element = {
      type: OBJECT_TYPE.TEXT,
      object: new SceneText({
        x: 180,
        y: 790,
        fontSize: 40,
        color: '#f7ce00',
        maxWidth: 600,
        lineHeight: 30,
        text: `Кохаю`,
      })
    }

    elements.push(text, textI, textLove, textYou);
    return elements;
  }

  private generateStars(amount: number, colors: string[], radiusEdge: [number, number]): Element[] {
    const stars: Element[] = []
    for(let i = 0, x = amount; i < x; i++) {
      const colorIndex = FinalScene.getRandomInt(0, colors.length - 1);
      const radius = FinalScene.getRandomInt(radiusEdge[0], radiusEdge[1]);
      const coordinates = this.getRandomCoordinates();
      stars.push({
        type: OBJECT_TYPE.ARC,
        object: new Star({
          id: i,
          x: coordinates[0],
          y: coordinates[1],
          radius,
          color: colors[colorIndex]
        })
      })
    }
    return stars
  }

  private getRandomCoordinates():[number, number] {
    return [
      FinalScene.getRandomInt(10, 1900),
      FinalScene.getRandomInt(10, 750),
    ]
  }
  private static getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}