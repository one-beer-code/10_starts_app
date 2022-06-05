import {Constellation, Element, OBJECT_TYPE} from '../models';
import {Star} from '../star';
import {StarLine} from '../star-line';
import {Scene} from './scene.interface';
import {SceneText} from "../scene-text";

export class ConstellationScene implements Scene{
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
          x: star.coordinates[0],
          y: star.coordinates[1]
        })
      };

      // add star text
      if(star.title) {
        const color = '#dfab31';
        starElem.object.color = color;
        (starElem.object as Star).radius = 20;

        const starText: Element = {
          type: OBJECT_TYPE.TEXT,
          object: new SceneText({
            x: star.coordinates[0],
            y: star.coordinates[1] + 40,
            fontSize: 20,
            textAlign: 'center',
            color,
            text: star.title
          })
        }

        elements.push(starText);
      }
      elements.push(starElem);
      // add stars line
      if(constellation.connectTo[index].length) {
        constellation.connectTo[index].forEach(starIndex => {
          const starLineElem: Element = {
            type: OBJECT_TYPE.LINE,
            object: new StarLine(star.coordinates, constellation.stars[starIndex].coordinates)
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
        maxWidth: 600,
        lineHeight: 30,
        text: `Это созвездие Льва. Содержит 10 звёзд. Из них 5 видимые. Регул, Альджеба, Денебола, Зосма, Альгенуби.
Но здесь не о звёздах. Ты говорила касаемо 10ти звёзд. Они тут и на небе. Хотя скорее всего ты явно не это ожидала. И то, что я сделал никому не надо.
Эти звёзды далеко и я не могу тебе их дать, но я могу и хочу сделать всё, чтобы ты могла до них дотянуться. Сейчас только глазами смотрет на это созведие. 
Я тебя очень люблю и здесь я не хочу писать что было сказано раньше. Хотя я могу много сказать о любви к тебе. Для мен звёзды это что-то не временное.  
Что-то далёкое и о них можно только мечтать. Посвезать стихи, поэмы. Любить их. Ты для меня Звезда.
Наши отношения сейчас это эти 10 звёзд. Наше прошлое. Я хотел добавить сюда фото. Но это уже было. Каждый яркий момент - это звезда. То когда мы познакомились.
Впервые поцеловались. То когда я на НГ увидел твою тату (да странно, но для меня это было начало). Черноговория) Волшебное место. Не из-за природы, а то как мы его там провели. 
Для меня это место всегда останется тёплым и наполненным любовью. Тогда я увидел какая ты актианая и не любишь спать)) Спали по 6ч и норм!) Хочу снова так. 
        `
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
    elements.push(text, textNext);

    return elements;
  }
}