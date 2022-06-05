import {Constellation, Element, OBJECT_TYPE} from '../models';
import {Scene} from './scene.interface';
import {SceneText} from "../scene-text";
import {Star} from "../star";
import {StarLine} from "../star-line";

export class TextScene implements Scene{
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
        text: `И я знаю что так будет. Не только потому, что мы снова будет путешествовать. А потому, что дети. Не думаю, что мы будем много спать. Каждая звезда, это момент из нашей жизни.  
Яркий! Тусклый, порой это сверхновая которая вот вот станет Чёрной дырой. Но это все есть в наших отношениях. Плохие и хорошие дни. И я ценю каждый из них. Пока что тут всего 10 звёзд.
Тут каждая звезда это наша история по крупинках и как видишь они яркие. Эти пару дней как то перевернули моё восприятия тебя. Я просто зашел с другой стороны. По другому на тебя посмотрел.
Я словно вспомнил, то что забыл. Это как вспомнить слово перед сном, которое старался вспомнить с самого утра. Теперь смотря на эти дни под другим углом, я понял. Я разрушал звёзды.
То, что строилось годами, выкладывалось в созвездия. Я шаг за шагом, звезда за звездой, уничтожал. Мне очень жаль, что я уничтожал эту красоту и тем, что она могла стать! 
За это я ещё долго буду в ответе. Но я могу и воссоздать и построить то, что превзойдёт предыдущие успехи. Звёзды станут ярче, больше и их количество прибудет! Потому что мне есть ради кого это делать!
Я недавно сказал что я в полной апатии. Так и есть. Но с этой апатией я только понял, что это пит стоп, перед большим толчком. Я смогу. Я сделаю это созвездие - галактикой!
И для этого хватит 1й причины. Ты!
Я тебя очень люблю и я понимаю то, что я сделал - это ничто и скорее всего я тебя не убедил. Но я всё равно буду пытаться. Как ни как строить галактики не легко. 
У меня было много идей как всё сделать и анимации и мысли. Но я не хочу тебя утомлять, да и времени мало. Я хочу донести, что я ошибался. Я тушил звёзды. Убивал в тебе то,
что помогало мне же двигаться дальше! Тесть сам себе хуже и делал. ПРосто из-за своих неких обидок, аж самому противно. Я хочу подарить тебе пока что эту цифровую галактику.
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
    elements.push(text, textDescription, textNext);

    return elements;
  }
}
