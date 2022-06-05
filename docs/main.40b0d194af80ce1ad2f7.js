/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const start_field_1 = __webpack_require__(/*! ./start-field/start-field */ "./src/app/start-field/start-field.ts");
const scene_1 = __webpack_require__(/*! ./scene */ "./src/app/scene/index.ts");
const constellations_1 = __webpack_require__(/*! ./constellations */ "./src/app/constellations/index.ts");
class App {
    constructor(canvas, field) {
        this.canvas = canvas;
        this.field = field;
        this.scenes = [];
        this.currentScene = 0;
        this.scenes = this.setScenes();
    }
    setScenes() {
        return [
            new scene_1.StartScene(),
            new scene_1.ConstellationScene(constellations_1.Leo),
            new scene_1.TextScene(constellations_1.Leo),
            new scene_1.Text_2Scene(constellations_1.Leo),
            new scene_1.FinalScene(constellations_1.Leo)
        ];
    }
    changeScene(step) {
        if (typeof step === 'boolean') {
            step ? this.currentScene++ : this.currentScene--;
            if (this.currentScene < 0) {
                this.currentScene = 0;
            }
            if (this.currentScene > this.scenes.length - 1) {
                this.currentScene = this.scenes.length - 1;
            }
        }
        if (typeof step === 'number') {
            this.currentScene = step;
        }
        this.playScene();
    }
    playScene() {
        this.field.clearScene();
        this.field.setScene(this.getCurrentScene());
    }
    getCurrentScene() {
        return this.scenes[this.currentScene];
    }
    // events
    onClick(cb) {
        this.canvas.addEventListener('click', (e) => {
            cb(e.x - e.target.offsetLeft, e.y - e.target.offsetTop);
        });
    }
}
window.onload = function () {
    const canvas = document.getElementById('canvas');
    const app = new App(canvas, new start_field_1.StarField(canvas));
    // click event
    app.onClick((x, y) => {
        app.changeScene(true);
    });
    app.playScene();
    // const field = new StarField(canvas);
    // const helper = new PointHelper(ctx, canvas.width, canvas.height);
    const startScene = new scene_1.StartScene();
    // field.setScene(startScene);
    const constellationScene = new scene_1.ConstellationScene(constellations_1.Leo);
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
};


/***/ }),

/***/ "./src/app/constellations/index.ts":
/*!*****************************************!*\
  !*** ./src/app/constellations/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./leo */ "./src/app/constellations/leo.ts"), exports);


/***/ }),

/***/ "./src/app/constellations/leo.ts":
/*!***************************************!*\
  !*** ./src/app/constellations/leo.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Leo = void 0;
exports.Leo = {
    title: 'Leo',
    connectTo: [
        [1, 9],
        [2],
        [3, 4],
        [],
        [5],
        [6],
        [7],
        [8],
        [],
        [5]
    ],
    stars: [
        {
            coordinates: [647, 726],
            title: 'Денебола'
        },
        {
            coordinates: [809, 615]
        },
        {
            coordinates: [1280, 444],
            title: 'Регул'
        },
        {
            coordinates: [1531, 536]
        },
        {
            coordinates: [1214, 326]
        },
        {
            coordinates: [1091, 285],
            title: 'Альджеба'
        },
        {
            coordinates: [1054, 196]
        },
        {
            coordinates: [1126, 36]
        },
        {
            coordinates: [1242, 54],
            title: 'Альгенуби'
        },
        {
            coordinates: [750, 483],
            title: 'Зосма'
        }
    ]
};


/***/ }),

/***/ "./src/app/models/constellation.interface.ts":
/*!***************************************************!*\
  !*** ./src/app/models/constellation.interface.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/app/models/element.interface.ts":
/*!*********************************************!*\
  !*** ./src/app/models/element.interface.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./element.interface */ "./src/app/models/element.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./constellation.interface */ "./src/app/models/constellation.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./object-type.enum */ "./src/app/models/object-type.enum.ts"), exports);


/***/ }),

/***/ "./src/app/models/object-type.enum.ts":
/*!********************************************!*\
  !*** ./src/app/models/object-type.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OBJECT_TYPE = void 0;
var OBJECT_TYPE;
(function (OBJECT_TYPE) {
    OBJECT_TYPE[OBJECT_TYPE["LINE"] = 0] = "LINE";
    OBJECT_TYPE[OBJECT_TYPE["ARC"] = 1] = "ARC";
    OBJECT_TYPE[OBJECT_TYPE["TEXT"] = 2] = "TEXT";
})(OBJECT_TYPE = exports.OBJECT_TYPE || (exports.OBJECT_TYPE = {}));


/***/ }),

/***/ "./src/app/scene-text/index.ts":
/*!*************************************!*\
  !*** ./src/app/scene-text/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./scene-text */ "./src/app/scene-text/scene-text.ts"), exports);


/***/ }),

/***/ "./src/app/scene-text/scene-text.ts":
/*!******************************************!*\
  !*** ./src/app/scene-text/scene-text.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SceneText = void 0;
class SceneText {
    constructor(options) {
        this.color = '#fff';
        this.lineHeight = 20;
        this.maxWidth = 1900;
        this.fontSize = 20;
        this.textAlign = "left";
        this.background = '';
        const { x, y, fontSize, text, color, textAlign, maxWidth, lineHeight, background } = options;
        this.x = x;
        this.y = y;
        this.text = text;
        if (fontSize) {
            this.fontSize = fontSize;
        }
        if (color) {
            this.color = color;
        }
        if (textAlign) {
            this.textAlign = textAlign;
        }
        if (maxWidth) {
            this.maxWidth = maxWidth;
        }
        if (lineHeight) {
            this.lineHeight = lineHeight;
        }
        if (background) {
            this.background = background;
        }
    }
}
exports.SceneText = SceneText;


/***/ }),

/***/ "./src/app/scene/constellation.scene.ts":
/*!**********************************************!*\
  !*** ./src/app/scene/constellation.scene.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConstellationScene = void 0;
const models_1 = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
const star_1 = __webpack_require__(/*! ../star */ "./src/app/star/index.ts");
const star_line_1 = __webpack_require__(/*! ../star-line */ "./src/app/star-line/index.ts");
const scene_text_1 = __webpack_require__(/*! ../scene-text */ "./src/app/scene-text/index.ts");
class ConstellationScene {
    constructor(constellation) {
        this.elements = [];
        this.elements = this.setElements(constellation);
    }
    setElements(constellation) {
        const elements = [];
        constellation.stars.forEach((star, index) => {
            // add stars
            const starElem = {
                type: models_1.OBJECT_TYPE.ARC,
                object: new star_1.Star({
                    id: index,
                    x: star.coordinates[0],
                    y: star.coordinates[1]
                })
            };
            // add star text
            if (star.title) {
                const color = '#dfab31';
                starElem.object.color = color;
                starElem.object.radius = 20;
                const starText = {
                    type: models_1.OBJECT_TYPE.TEXT,
                    object: new scene_text_1.SceneText({
                        x: star.coordinates[0],
                        y: star.coordinates[1] + 40,
                        fontSize: 20,
                        textAlign: 'center',
                        color,
                        text: star.title
                    })
                };
                elements.push(starText);
            }
            elements.push(starElem);
            // add stars line
            if (constellation.connectTo[index].length) {
                constellation.connectTo[index].forEach(starIndex => {
                    const starLineElem = {
                        type: models_1.OBJECT_TYPE.LINE,
                        object: new star_line_1.StarLine(star.coordinates, constellation.stars[starIndex].coordinates)
                    };
                    elements.push(starLineElem);
                });
            }
        });
        // set text
        const text = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
                x: 20,
                y: 70,
                fontSize: 60,
                color: '#fff',
                text: '10 Stars'
            })
        };
        const textDescription = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
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
        };
        const textNext = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
                x: 20,
                y: 790,
                fontSize: 20,
                color: 'red',
                maxWidth: 600,
                lineHeight: 30,
                text: `Left click to switch scene`
            })
        };
        elements.push(text, textDescription, textNext);
        return elements;
    }
}
exports.ConstellationScene = ConstellationScene;


/***/ }),

/***/ "./src/app/scene/final.scene.ts":
/*!**************************************!*\
  !*** ./src/app/scene/final.scene.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinalScene = void 0;
const models_1 = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
const star_1 = __webpack_require__(/*! ../star */ "./src/app/star/index.ts");
const scene_text_1 = __webpack_require__(/*! ../scene-text */ "./src/app/scene-text/index.ts");
const star_line_1 = __webpack_require__(/*! ../star-line */ "./src/app/star-line/index.ts");
class FinalScene {
    constructor(constellation) {
        this.elements = [];
        this.starAmount = 1000;
        this.leoColor = '#fff';
        this.elements = this.setElements(constellation);
    }
    setElements(constellation) {
        const elements = this.generateStars(this.starAmount, ['#ffc8c8', '#c3d2ff', '#ffffd6', '#fff'], [1, 8]);
        constellation.stars.forEach((star, index) => {
            // add stars
            const starElem = {
                type: models_1.OBJECT_TYPE.ARC,
                object: new star_1.Star({
                    id: index,
                    x: star.coordinates[0],
                    y: star.coordinates[1],
                    color: this.leoColor
                })
            };
            // add star text
            if (star.title) {
                starElem.object.radius = 20;
            }
            elements.push(starElem);
            // add stars line
            if (constellation.connectTo[index].length) {
                constellation.connectTo[index].forEach(starIndex => {
                    const starLineElem = {
                        type: models_1.OBJECT_TYPE.LINE,
                        object: new star_line_1.StarLine(star.coordinates, constellation.stars[starIndex].coordinates, this.leoColor)
                    };
                    elements.push(starLineElem);
                });
            }
        });
        // text
        const text = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
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
        const textI = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
                x: 20,
                y: 790,
                fontSize: 40,
                color: '#fff',
                maxWidth: 600,
                lineHeight: 30,
                text: `Я`,
            })
        };
        const textLove = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
                x: 70,
                y: 790,
                fontSize: 40,
                color: '#0058b5',
                maxWidth: 600,
                lineHeight: 30,
                text: `Тебе`,
            })
        };
        const textYou = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
                x: 180,
                y: 790,
                fontSize: 40,
                color: '#f7ce00',
                maxWidth: 600,
                lineHeight: 30,
                text: `Кохаю`,
            })
        };
        elements.push(text, textI, textLove, textYou);
        return elements;
    }
    generateStars(amount, colors, radiusEdge) {
        const stars = [];
        for (let i = 0, x = amount; i < x; i++) {
            const colorIndex = FinalScene.getRandomInt(0, colors.length - 1);
            const radius = FinalScene.getRandomInt(radiusEdge[0], radiusEdge[1]);
            const coordinates = this.getRandomCoordinates();
            stars.push({
                type: models_1.OBJECT_TYPE.ARC,
                object: new star_1.Star({
                    id: i,
                    x: coordinates[0],
                    y: coordinates[1],
                    radius,
                    color: colors[colorIndex]
                })
            });
        }
        return stars;
    }
    getRandomCoordinates() {
        return [
            FinalScene.getRandomInt(10, 1900),
            FinalScene.getRandomInt(10, 750),
        ];
    }
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
exports.FinalScene = FinalScene;


/***/ }),

/***/ "./src/app/scene/index.ts":
/*!********************************!*\
  !*** ./src/app/scene/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./constellation.scene */ "./src/app/scene/constellation.scene.ts"), exports);
__exportStar(__webpack_require__(/*! ./start.scene */ "./src/app/scene/start.scene.ts"), exports);
__exportStar(__webpack_require__(/*! ./scene.enum */ "./src/app/scene/scene.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./scene.interface */ "./src/app/scene/scene.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./text.scene */ "./src/app/scene/text.scene.ts"), exports);
__exportStar(__webpack_require__(/*! ./text_2.scene */ "./src/app/scene/text_2.scene.ts"), exports);
__exportStar(__webpack_require__(/*! ./final.scene */ "./src/app/scene/final.scene.ts"), exports);


/***/ }),

/***/ "./src/app/scene/scene.enum.ts":
/*!*************************************!*\
  !*** ./src/app/scene/scene.enum.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SceneType = void 0;
var SceneType;
(function (SceneType) {
    SceneType[SceneType["Start"] = 0] = "Start";
})(SceneType = exports.SceneType || (exports.SceneType = {}));


/***/ }),

/***/ "./src/app/scene/scene.interface.ts":
/*!******************************************!*\
  !*** ./src/app/scene/scene.interface.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/app/scene/start.scene.ts":
/*!**************************************!*\
  !*** ./src/app/scene/start.scene.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StartScene = void 0;
const scene_text_1 = __webpack_require__(/*! ../scene-text */ "./src/app/scene-text/index.ts");
const models_1 = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
class StartScene {
    constructor() {
        this.elements = [];
        this.elements = this.setElements();
    }
    setElements() {
        const elements = [];
        const centerX = 1930 / 2;
        const centerY = 800 / 2;
        elements.push({
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
                x: centerX,
                y: centerY,
                fontSize: 100,
                color: '#fff',
                text: '10 Stars',
                textAlign: 'center'
            })
        });
        elements.push({
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
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
exports.StartScene = StartScene;


/***/ }),

/***/ "./src/app/scene/text.scene.ts":
/*!*************************************!*\
  !*** ./src/app/scene/text.scene.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextScene = void 0;
const models_1 = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
const scene_text_1 = __webpack_require__(/*! ../scene-text */ "./src/app/scene-text/index.ts");
const star_1 = __webpack_require__(/*! ../star */ "./src/app/star/index.ts");
const star_line_1 = __webpack_require__(/*! ../star-line */ "./src/app/star-line/index.ts");
class TextScene {
    constructor(constellation) {
        this.elements = [];
        this.elements = this.setElements(constellation);
    }
    setElements(constellation) {
        const elements = [];
        constellation.stars.forEach((star, index) => {
            // add stars
            const starElem = {
                type: models_1.OBJECT_TYPE.ARC,
                object: new star_1.Star({
                    id: index,
                    x: star.coordinates[0] + 350,
                    y: star.coordinates[1]
                })
            };
            elements.push(starElem);
        });
        // add star lines
        const stars = elements.filter(elem => elem.type === models_1.OBJECT_TYPE.ARC);
        stars.forEach((starElem, index) => {
            const currentStar = starElem.object;
            // add stars line
            if (constellation.connectTo[index].length) {
                constellation.connectTo[index].forEach(starIndex => {
                    const toStar = stars[starIndex].object;
                    const starLineElem = {
                        type: models_1.OBJECT_TYPE.LINE,
                        object: new star_line_1.StarLine([currentStar.x, currentStar.y], [toStar.x, toStar.y])
                    };
                    elements.push(starLineElem);
                });
            }
        });
        // set text
        const text = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
                x: 20,
                y: 70,
                fontSize: 60,
                color: '#fff',
                text: '10 Stars'
            })
        };
        const textDescription = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
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
        };
        const textNext = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
                x: 20,
                y: 790,
                fontSize: 20,
                color: 'red',
                maxWidth: 600,
                lineHeight: 30,
                text: `Left click to switch scene`
            })
        };
        elements.push(text, textDescription, textNext);
        return elements;
    }
}
exports.TextScene = TextScene;


/***/ }),

/***/ "./src/app/scene/text_2.scene.ts":
/*!***************************************!*\
  !*** ./src/app/scene/text_2.scene.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Text_2Scene = void 0;
const scene_text_1 = __webpack_require__(/*! ../scene-text */ "./src/app/scene-text/index.ts");
const models_1 = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
const star_1 = __webpack_require__(/*! ../star */ "./src/app/star/index.ts");
const star_line_1 = __webpack_require__(/*! ../star-line */ "./src/app/star-line/index.ts");
class Text_2Scene {
    constructor(constellation) {
        this.elements = [];
        this.elements = this.setElements(constellation);
    }
    setElements(constellation) {
        const elements = [];
        constellation.stars.forEach((star, index) => {
            // add stars
            const starElem = {
                type: models_1.OBJECT_TYPE.ARC,
                object: new star_1.Star({
                    id: index,
                    x: star.coordinates[0] + 350,
                    y: star.coordinates[1]
                })
            };
            elements.push(starElem);
        });
        // add star lines
        const stars = elements.filter(elem => elem.type === models_1.OBJECT_TYPE.ARC);
        stars.forEach((starElem, index) => {
            const currentStar = starElem.object;
            // add stars line
            if (constellation.connectTo[index].length) {
                constellation.connectTo[index].forEach(starIndex => {
                    const toStar = stars[starIndex].object;
                    const starLineElem = {
                        type: models_1.OBJECT_TYPE.LINE,
                        object: new star_line_1.StarLine([currentStar.x, currentStar.y], [toStar.x, toStar.y])
                    };
                    elements.push(starLineElem);
                });
            }
        });
        // set text
        const text = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
                x: 20,
                y: 70,
                fontSize: 60,
                color: '#fff',
                text: '10 Stars'
            })
        };
        const textDescription = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
                x: 20,
                y: 120,
                fontSize: 20,
                color: '#fff',
                maxWidth: 900,
                lineHeight: 30,
                text: `Но с каждым маленьким и большим шагом, она будет расширяться. Я очень надеюсь что в скором будущем, эта галактика будет явью. Я тебя очень люблю.
Я понимаю, что я тут написал много. И снова, я это ещё почистило. Это я к тому, чтоу меня скорее просто устанут пальцы печатать, чем я смогу сказать как сильно я тебя люблю.`
            })
        };
        const textNext = {
            type: models_1.OBJECT_TYPE.TEXT,
            object: new scene_text_1.SceneText({
                x: 20,
                y: 790,
                fontSize: 20,
                color: 'red',
                maxWidth: 600,
                lineHeight: 30,
                text: `Left click to switch scene`
            })
        };
        elements.push(text, textDescription, textNext);
        return elements;
    }
}
exports.Text_2Scene = Text_2Scene;


/***/ }),

/***/ "./src/app/star-line/index.ts":
/*!************************************!*\
  !*** ./src/app/star-line/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./star-line */ "./src/app/star-line/star-line.ts"), exports);


/***/ }),

/***/ "./src/app/star-line/star-line.ts":
/*!****************************************!*\
  !*** ./src/app/star-line/star-line.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StarLine = void 0;
class StarLine {
    constructor(from, to, color) {
        this.width = 5;
        this.color = '#fff';
        this.padding = 0;
        this.fromX = from[0];
        this.fromY = from[1];
        this.toX = to[0];
        this.toY = to[1];
        if (color) {
            this.color = color;
        }
    }
}
exports.StarLine = StarLine;


/***/ }),

/***/ "./src/app/star/index.ts":
/*!*******************************!*\
  !*** ./src/app/star/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./star */ "./src/app/star/star.ts"), exports);


/***/ }),

/***/ "./src/app/star/star.ts":
/*!******************************!*\
  !*** ./src/app/star/star.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Star = void 0;
class Star {
    constructor(options) {
        this.radius = 10;
        this.color = '#fff';
        const { id, x, y, radius, color } = options;
        this.id = id;
        this.x = x;
        this.y = y;
        if (radius) {
            this.radius = radius;
        }
        if (color) {
            this.color = color;
        }
    }
}
exports.Star = Star;


/***/ }),

/***/ "./src/app/start-field/start-field.ts":
/*!********************************************!*\
  !*** ./src/app/start-field/start-field.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StarField = void 0;
const object_type_enum_1 = __webpack_require__(/*! ../models/object-type.enum */ "./src/app/models/object-type.enum.ts");
class StarField {
    constructor(canvas) {
        this.elements = [];
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    drawStar(star) {
        this.arc(star);
    }
    drawStarLine(line) {
        this.line(line);
    }
    drawText(textScene) {
        this.text(textScene);
    }
    line(line) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.strokeStyle = line.color;
        this.ctx.lineWidth = line.width;
        this.ctx.moveTo(line.fromX, line.fromY);
        this.ctx.lineTo(line.toX, line.toY);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
    }
    arc(start) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = start.color;
        this.ctx.arc(start.x, start.y, start.radius, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore();
    }
    text(options) {
        const { x, y, fontSize, color, text, textAlign, maxWidth, lineHeight, background } = options;
        const draText = () => {
            const words = text.split(" ");
            const countWords = words.length;
            let line = "";
            let marginLeft = x;
            let marginTop = y;
            const lines = [];
            for (let n = 0; n < countWords; n++) {
                const testLine = line + words[n] + " ";
                const testWidth = this.ctx.measureText(testLine).width;
                if (testWidth > maxWidth) {
                    lines.push({
                        text: line,
                        x: marginLeft,
                        y: marginTop
                    });
                    line = words[n] + " ";
                    marginTop += lineHeight;
                }
                else {
                    line = testLine;
                }
            }
            lines.push({
                text: line,
                x: marginLeft,
                y: marginTop
            });
            // draw background
            if (background) {
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.fillStyle = background;
                this.ctx.fillRect(x - 20, y - lineHeight, x + maxWidth, marginTop);
                this.ctx.closePath();
                this.ctx.restore();
            }
            // draw text
            lines.forEach(line => {
                this.ctx.fillText(line.text, line.x, line.y);
            });
        };
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = textAlign;
        draText();
        this.ctx.closePath();
        this.ctx.restore();
    }
    addElement(element) {
        this.elements.push(element);
    }
    onMouseMove(cb) {
        this.canvas.addEventListener('mousemove', (e) => {
            cb(e.x - e.target.offsetLeft, e.y - e.target.offsetTop);
        });
    }
    drawElements(elements) {
        elements.sort((a, b) => a.type > b.type)
            .forEach(element => {
            if (element.type === object_type_enum_1.OBJECT_TYPE.ARC) {
                this.drawStar(element.object);
            }
            if (element.type === object_type_enum_1.OBJECT_TYPE.LINE) {
                this.drawStarLine(element.object);
            }
            if (element.type === object_type_enum_1.OBJECT_TYPE.TEXT) {
                this.drawText(element.object);
            }
        });
    }
    setScene(scene) {
        this.drawElements(scene.elements);
    }
    clearScene() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}
exports.StarField = StarField;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./app/app */ "./src/app/app.ts");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGFydHMvLi9zcmMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly8xMF9zdGFydHMvLi9zcmMvYXBwL2NvbnN0ZWxsYXRpb25zL2luZGV4LnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvY29uc3RlbGxhdGlvbnMvbGVvLnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvbW9kZWxzL2NvbnN0ZWxsYXRpb24uaW50ZXJmYWNlLnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvbW9kZWxzL2VsZW1lbnQuaW50ZXJmYWNlLnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvbW9kZWxzL29iamVjdC10eXBlLmVudW0udHMiLCJ3ZWJwYWNrOi8vMTBfc3RhcnRzLy4vc3JjL2FwcC9zY2VuZS10ZXh0L2luZGV4LnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvc2NlbmUtdGV4dC9zY2VuZS10ZXh0LnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvc2NlbmUvY29uc3RlbGxhdGlvbi5zY2VuZS50cyIsIndlYnBhY2s6Ly8xMF9zdGFydHMvLi9zcmMvYXBwL3NjZW5lL2ZpbmFsLnNjZW5lLnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvc2NlbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vMTBfc3RhcnRzLy4vc3JjL2FwcC9zY2VuZS9zY2VuZS5lbnVtLnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvc2NlbmUvc2NlbmUuaW50ZXJmYWNlLnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvc2NlbmUvc3RhcnQuc2NlbmUudHMiLCJ3ZWJwYWNrOi8vMTBfc3RhcnRzLy4vc3JjL2FwcC9zY2VuZS90ZXh0LnNjZW5lLnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvc2NlbmUvdGV4dF8yLnNjZW5lLnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvc3Rhci1saW5lL2luZGV4LnRzIiwid2VicGFjazovLzEwX3N0YXJ0cy8uL3NyYy9hcHAvc3Rhci1saW5lL3N0YXItbGluZS50cyIsIndlYnBhY2s6Ly8xMF9zdGFydHMvLi9zcmMvYXBwL3N0YXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vMTBfc3RhcnRzLy4vc3JjL2FwcC9zdGFyL3N0YXIudHMiLCJ3ZWJwYWNrOi8vMTBfc3RhcnRzLy4vc3JjL2FwcC9zdGFydC1maWVsZC9zdGFydC1maWVsZC50cyIsIndlYnBhY2s6Ly8xMF9zdGFydHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMTBfc3RhcnRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RhckZpZWxkfSBmcm9tICcuL3N0YXJ0LWZpZWxkL3N0YXJ0LWZpZWxkJztcbmltcG9ydCB7Q29uc3RlbGxhdGlvblNjZW5lLCBTY2VuZSwgU3RhcnRTY2VuZSwgVGV4dFNjZW5lLCBUZXh0XzJTY2VuZSwgRmluYWxTY2VuZX0gZnJvbSBcIi4vc2NlbmVcIjtcbmltcG9ydCB7IExlbyB9IGZyb20gXCIuL2NvbnN0ZWxsYXRpb25zXCI7XG5cbmNsYXNzIEFwcCB7XG4gIHNjZW5lczogU2NlbmVbXSA9IFtdO1xuICBjdXJyZW50U2NlbmUgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIHByaXZhdGUgZmllbGQ6IFN0YXJGaWVsZFxuICApIHtcbiAgICB0aGlzLnNjZW5lcyA9IHRoaXMuc2V0U2NlbmVzKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFNjZW5lcygpOiBTY2VuZVtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgbmV3IFN0YXJ0U2NlbmUoKSxcbiAgICAgIG5ldyBDb25zdGVsbGF0aW9uU2NlbmUoTGVvKSxcbiAgICAgIG5ldyBUZXh0U2NlbmUoTGVvKSxcbiAgICAgIG5ldyBUZXh0XzJTY2VuZShMZW8pLFxuICAgICAgbmV3IEZpbmFsU2NlbmUoTGVvKVxuICAgIF1cbiAgfVxuXG4gIGNoYW5nZVNjZW5lKHN0ZXA6IGJvb2xlYW4gfCBudW1iZXIpIHtcbiAgICBpZih0eXBlb2Ygc3RlcCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBzdGVwID8gdGhpcy5jdXJyZW50U2NlbmUrKyA6IHRoaXMuY3VycmVudFNjZW5lLS07XG4gICAgICBpZih0aGlzLmN1cnJlbnRTY2VuZSA8IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSAwO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5jdXJyZW50U2NlbmUgPiB0aGlzLnNjZW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYodHlwZW9mIHN0ZXAgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHN0ZXA7XG4gICAgfVxuXG4gICAgdGhpcy5wbGF5U2NlbmUoKTtcbiAgfVxuXG4gIHBsYXlTY2VuZSgpIHtcbiAgICB0aGlzLmZpZWxkLmNsZWFyU2NlbmUoKTtcbiAgICB0aGlzLmZpZWxkLnNldFNjZW5lKHRoaXMuZ2V0Q3VycmVudFNjZW5lKCkpO1xuICB9XG5cbiAgZ2V0Q3VycmVudFNjZW5lKCk6IFNjZW5lIHtcbiAgICByZXR1cm4gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVdO1xuICB9XG5cbiAgLy8gZXZlbnRzXG4gIG9uQ2xpY2soY2I6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCkge1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xuICAgICAgY2IoZS54IC0gZS50YXJnZXQub2Zmc2V0TGVmdCwgZS55IC0gZS50YXJnZXQub2Zmc2V0VG9wKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgY29uc3QgYXBwID0gbmV3IEFwcChjYW52YXMsIG5ldyBTdGFyRmllbGQoY2FudmFzKSk7XG5cbiAgLy8gY2xpY2sgZXZlbnRcbiAgYXBwLm9uQ2xpY2soKHgsIHkpID0+IHtcbiAgICBhcHAuY2hhbmdlU2NlbmUodHJ1ZSk7XG4gIH0pO1xuXG4gIGFwcC5wbGF5U2NlbmUoKTtcblxuXG4gIC8vIGNvbnN0IGZpZWxkID0gbmV3IFN0YXJGaWVsZChjYW52YXMpO1xuICAvLyBjb25zdCBoZWxwZXIgPSBuZXcgUG9pbnRIZWxwZXIoY3R4LCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIGNvbnN0IHN0YXJ0U2NlbmUgPSBuZXcgU3RhcnRTY2VuZSgpO1xuICAvLyBmaWVsZC5zZXRTY2VuZShzdGFydFNjZW5lKTtcblxuICBjb25zdCBjb25zdGVsbGF0aW9uU2NlbmUgPSBuZXcgQ29uc3RlbGxhdGlvblNjZW5lKExlbyk7XG4gIC8vIGZpZWxkLnNldFNjZW5lKGNvbnN0ZWxsYXRpb25TY2VuZSk7XG5cblxuICAvLyBmaWVsZC5vbk1vdXNlTW92ZSgoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgLy8gICAvLyBoZWxwZXIuZHJhd0xpbmVzKHgsIHkpO1xuICAvLyAgIC8vIGZpZWxkLmRyYXdFbGVtZW50cygpO1xuICAvLyB9KTtcblxuXG4gIC8qICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCBbeCx5XSA9IFtlLnggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LCBlLnkgLSBlLnRhcmdldC5vZmZzZXRUb3BdO1xuICAgICAgY29uc3Qgc3RhciA9IG5ldyBTdGFyKHgsIHkpO1xuICAgICAgZmllbGQuYWRkRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IE9CSkVDVF9UWVBFLkFSQyxcbiAgICAgICAgb2JqZWN0OiBzdGFyXG4gICAgICB9KTtcbiAgICB9KTsqL1xufSIsImV4cG9ydCAqIGZyb20gJy4vbGVvJzsiLCJpbXBvcnQge0NvbnN0ZWxsYXRpb259IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBMZW86IENvbnN0ZWxsYXRpb24gPSB7XG4gIHRpdGxlOiAnTGVvJyxcbiAgY29ubmVjdFRvOiBbXG4gICAgWzEsIDldLFxuICAgIFsyXSxcbiAgICBbMywgNF0sXG4gICAgW10sXG4gICAgWzVdLFxuICAgIFs2XSxcbiAgICBbN10sXG4gICAgWzhdLFxuICAgIFtdLFxuICAgIFs1XVxuICBdLFxuICBzdGFyczogW1xuICAgIHtcbiAgICAgIGNvb3JkaW5hdGVzOiBbNjQ3LCA3MjZdLFxuICAgICAgdGl0bGU6ICfQlNC10L3QtdCx0L7Qu9CwJ1xuICAgIH0sXG4gICAge1xuICAgICAgY29vcmRpbmF0ZXM6IFs4MDksIDYxNV1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNvb3JkaW5hdGVzOiBbMTI4MCwgNDQ0XSxcbiAgICAgIHRpdGxlOiAn0KDQtdCz0YPQuydcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvb3JkaW5hdGVzOiBbMTUzMSwgNTM2XVxuICAgIH0sXG4gICAge1xuICAgICAgY29vcmRpbmF0ZXM6IFsxMjE0LCAzMjZdXG4gICAgfSxcbiAgICB7XG4gICAgICBjb29yZGluYXRlczogWzEwOTEsIDI4NV0sXG4gICAgICB0aXRsZTogJ9CQ0LvRjNC00LbQtdCx0LAnXG4gICAgfSxcbiAgICB7XG4gICAgICBjb29yZGluYXRlczogWzEwNTQsIDE5Nl1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNvb3JkaW5hdGVzOiBbMTEyNiwgMzZdXG4gICAgfSxcbiAgICB7XG4gICAgICBjb29yZGluYXRlczogWzEyNDIsIDU0XSxcbiAgICAgIHRpdGxlOiAn0JDQu9GM0LPQtdC90YPQsdC4J1xuICAgIH0sXG4gICAge1xuICAgICAgY29vcmRpbmF0ZXM6IFs3NTAsIDQ4M10sXG4gICAgICB0aXRsZTogJ9CX0L7RgdC80LAnXG4gICAgfVxuICBdXG59OyIsImV4cG9ydCBpbnRlcmZhY2UgQ29uc3RlbGxhdGlvbntcbiAgdGl0bGU6IHN0cmluZztcbiAgY29ubmVjdFRvOiBBcnJheTxudW1iZXI+W107XG4gIHN0YXJzOiBBcnJheTx7dGl0bGU/OiBzdHJpbmcsIGNvb3JkaW5hdGVzOiBudW1iZXJbXX0+O1xufSIsImltcG9ydCB7T0JKRUNUX1RZUEV9IGZyb20gXCIuL29iamVjdC10eXBlLmVudW1cIjtcbmltcG9ydCB7U3Rhcn0gZnJvbSBcIi4uL3N0YXJcIjtcbmltcG9ydCB7U3RhckxpbmV9IGZyb20gXCIuLi9zdGFyLWxpbmVcIjtcbmltcG9ydCB7U2NlbmVUZXh0fSBmcm9tIFwiLi4vc2NlbmUtdGV4dFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnQge1xuICB0eXBlOiBPQkpFQ1RfVFlQRTtcbiAgb2JqZWN0OiBTdGFyIHwgU3RhckxpbmUgfCBTY2VuZVRleHRcbn0iLCJleHBvcnQgKiBmcm9tICcuL2VsZW1lbnQuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RlbGxhdGlvbi5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9vYmplY3QtdHlwZS5lbnVtJzsiLCJleHBvcnQgZW51bSBPQkpFQ1RfVFlQRSB7XG4gIExJTkUsXG4gIEFSQyxcbiAgVEVYVCxcbn0iLCJleHBvcnQgKiBmcm9tICcuL3NjZW5lLXRleHQnOyIsIlxuZXhwb3J0IGNsYXNzIFNjZW5lVGV4dCB7XG4gIGNvbG9yID0gJyNmZmYnXG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBsaW5lSGVpZ2h0ID0gMjA7XG4gIG1heFdpZHRoID0gMTkwMDtcbiAgZm9udFNpemUgPSAyMDtcbiAgdGV4dDogc3RyaW5nO1xuICB0ZXh0QWxpZ246IENhbnZhc1RleHRBbGlnbiA9IFwibGVmdFwiO1xuICBiYWNrZ3JvdW5kOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiB7XG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICBmb250U2l6ZT86IG51bWJlcixcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgY29sb3I/OiBzdHJpbmcsXG4gICAgdGV4dEFsaWduPzogQ2FudmFzVGV4dEFsaWduLFxuICAgIG1heFdpZHRoPzogbnVtYmVyLFxuICAgIGxpbmVIZWlnaHQ/OiBudW1iZXIsXG4gICAgYmFja2dyb3VuZD86IHN0cmluZ1xuICB9KSB7XG4gICAgY29uc3Qge3gsIHksIGZvbnRTaXplLCB0ZXh0LCBjb2xvciwgdGV4dEFsaWduLCBtYXhXaWR0aCwgbGluZUhlaWdodCwgYmFja2dyb3VuZH0gPSBvcHRpb25zO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIGlmKGZvbnRTaXplKSB7XG4gICAgICB0aGlzLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgfVxuICAgIGlmKGNvbG9yKSB7XG4gICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICAgIGlmKHRleHRBbGlnbikge1xuICAgICAgdGhpcy50ZXh0QWxpZ24gPSB0ZXh0QWxpZ247XG4gICAgfVxuICAgIGlmKG1heFdpZHRoKSB7XG4gICAgICB0aGlzLm1heFdpZHRoID0gbWF4V2lkdGg7XG4gICAgfVxuICAgIGlmKGxpbmVIZWlnaHQpIHtcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XG4gICAgfVxuICAgIGlmKGJhY2tncm91bmQpIHtcbiAgICAgIHRoaXMuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHtDb25zdGVsbGF0aW9uLCBFbGVtZW50LCBPQkpFQ1RfVFlQRX0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7U3Rhcn0gZnJvbSAnLi4vc3Rhcic7XG5pbXBvcnQge1N0YXJMaW5lfSBmcm9tICcuLi9zdGFyLWxpbmUnO1xuaW1wb3J0IHtTY2VuZX0gZnJvbSAnLi9zY2VuZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtTY2VuZVRleHR9IGZyb20gXCIuLi9zY2VuZS10ZXh0XCI7XG5cbmV4cG9ydCBjbGFzcyBDb25zdGVsbGF0aW9uU2NlbmUgaW1wbGVtZW50cyBTY2VuZXtcbiAgZWxlbWVudHM6IEVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbnN0ZWxsYXRpb246IENvbnN0ZWxsYXRpb25cbiAgKSB7XG4gICAgdGhpcy5lbGVtZW50cyA9IHRoaXMuc2V0RWxlbWVudHMoY29uc3RlbGxhdGlvbik7XG4gIH1cblxuICBzZXRFbGVtZW50cyhjb25zdGVsbGF0aW9uOiBDb25zdGVsbGF0aW9uKTogRWxlbWVudFtdIHtcbiAgICBjb25zdCBlbGVtZW50czogRWxlbWVudFtdID0gW11cbiAgICBjb25zdGVsbGF0aW9uLnN0YXJzLmZvckVhY2goKHN0YXIsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIC8vIGFkZCBzdGFyc1xuICAgICAgY29uc3Qgc3RhckVsZW06IEVsZW1lbnQgPSB7XG4gICAgICAgIHR5cGU6IE9CSkVDVF9UWVBFLkFSQyxcbiAgICAgICAgb2JqZWN0OiBuZXcgU3Rhcih7XG4gICAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICAgIHg6IHN0YXIuY29vcmRpbmF0ZXNbMF0sXG4gICAgICAgICAgeTogc3Rhci5jb29yZGluYXRlc1sxXVxuICAgICAgICB9KVxuICAgICAgfTtcblxuICAgICAgLy8gYWRkIHN0YXIgdGV4dFxuICAgICAgaWYoc3Rhci50aXRsZSkge1xuICAgICAgICBjb25zdCBjb2xvciA9ICcjZGZhYjMxJztcbiAgICAgICAgc3RhckVsZW0ub2JqZWN0LmNvbG9yID0gY29sb3I7XG4gICAgICAgIChzdGFyRWxlbS5vYmplY3QgYXMgU3RhcikucmFkaXVzID0gMjA7XG5cbiAgICAgICAgY29uc3Qgc3RhclRleHQ6IEVsZW1lbnQgPSB7XG4gICAgICAgICAgdHlwZTogT0JKRUNUX1RZUEUuVEVYVCxcbiAgICAgICAgICBvYmplY3Q6IG5ldyBTY2VuZVRleHQoe1xuICAgICAgICAgICAgeDogc3Rhci5jb29yZGluYXRlc1swXSxcbiAgICAgICAgICAgIHk6IHN0YXIuY29vcmRpbmF0ZXNbMV0gKyA0MCxcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIHRleHQ6IHN0YXIudGl0bGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudHMucHVzaChzdGFyVGV4dCk7XG4gICAgICB9XG4gICAgICBlbGVtZW50cy5wdXNoKHN0YXJFbGVtKTtcbiAgICAgIC8vIGFkZCBzdGFycyBsaW5lXG4gICAgICBpZihjb25zdGVsbGF0aW9uLmNvbm5lY3RUb1tpbmRleF0ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0ZWxsYXRpb24uY29ubmVjdFRvW2luZGV4XS5mb3JFYWNoKHN0YXJJbmRleCA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhckxpbmVFbGVtOiBFbGVtZW50ID0ge1xuICAgICAgICAgICAgdHlwZTogT0JKRUNUX1RZUEUuTElORSxcbiAgICAgICAgICAgIG9iamVjdDogbmV3IFN0YXJMaW5lKHN0YXIuY29vcmRpbmF0ZXMsIGNvbnN0ZWxsYXRpb24uc3RhcnNbc3RhckluZGV4XS5jb29yZGluYXRlcylcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVsZW1lbnRzLnB1c2goc3RhckxpbmVFbGVtKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHNldCB0ZXh0XG4gICAgY29uc3QgdGV4dDogRWxlbWVudCA9IHtcbiAgICAgIHR5cGU6IE9CSkVDVF9UWVBFLlRFWFQsXG4gICAgICBvYmplY3Q6IG5ldyBTY2VuZVRleHQoe1xuICAgICAgICB4OiAyMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIGZvbnRTaXplOiA2MCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgdGV4dDogJzEwIFN0YXJzJ1xuICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgdGV4dERlc2NyaXB0aW9uOiBFbGVtZW50ID0ge1xuICAgICAgdHlwZTogT0JKRUNUX1RZUEUuVEVYVCxcbiAgICAgIG9iamVjdDogbmV3IFNjZW5lVGV4dCh7XG4gICAgICAgIHg6IDIwLFxuICAgICAgICB5OiAxMjAsXG4gICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgbWF4V2lkdGg6IDYwMCxcbiAgICAgICAgbGluZUhlaWdodDogMzAsXG4gICAgICAgIHRleHQ6IGDQrdGC0L4g0YHQvtC30LLQtdC30LTQuNC1INCb0YzQstCwLiDQodC+0LTQtdGA0LbQuNGCIDEwINC30LLRkdC30LQuINCY0Lcg0L3QuNGFIDUg0LLQuNC00LjQvNGL0LUuINCg0LXQs9GD0LssINCQ0LvRjNC00LbQtdCx0LAsINCU0LXQvdC10LHQvtC70LAsINCX0L7RgdC80LAsINCQ0LvRjNCz0LXQvdGD0LHQuC5cbtCd0L4g0LfQtNC10YHRjCDQvdC1INC+INC30LLRkdC30LTQsNGFLiDQotGLINCz0L7QstC+0YDQuNC70LAg0LrQsNGB0LDQtdC80L4gMTDRgtC4INC30LLRkdC30LQuINCe0L3QuCDRgtGD0YIg0Lgg0L3QsCDQvdC10LHQtS4g0KXQvtGC0Y8g0YHQutC+0YDQtdC1INCy0YHQtdCz0L4g0YLRiyDRj9Cy0L3QviDQvdC1INGN0YLQviDQvtC20LjQtNCw0LvQsC4g0Jgg0YLQviwg0YfRgtC+INGPINGB0LTQtdC70LDQuyDQvdC40LrQvtC80YMg0L3QtSDQvdCw0LTQvi5cbtCt0YLQuCDQt9Cy0ZHQt9C00Ysg0LTQsNC70LXQutC+INC4INGPINC90LUg0LzQvtCz0YMg0YLQtdCx0LUg0LjRhSDQtNCw0YLRjCwg0L3QviDRjyDQvNC+0LPRgyDQuCDRhdC+0YfRgyDRgdC00LXQu9Cw0YLRjCDQstGB0ZEsINGH0YLQvtCx0Ysg0YLRiyDQvNC+0LPQu9CwINC00L4g0L3QuNGFINC00L7RgtGP0L3Rg9GC0YzRgdGPLiDQodC10LnRh9Cw0YEg0YLQvtC70YzQutC+INCz0LvQsNC30LDQvNC4INGB0LzQvtGC0YDQtdGCINC90LAg0Y3RgtC+INGB0L7Qt9Cy0LXQtNC40LUuIFxu0K8g0YLQtdCx0Y8g0L7Rh9C10L3RjCDQu9GO0LHQu9GOINC4INC30LTQtdGB0Ywg0Y8g0L3QtSDRhdC+0YfRgyDQv9C40YHQsNGC0Ywg0YfRgtC+INCx0YvQu9C+INGB0LrQsNC30LDQvdC+INGA0LDQvdGM0YjQtS4g0KXQvtGC0Y8g0Y8g0LzQvtCz0YMg0LzQvdC+0LPQviDRgdC60LDQt9Cw0YLRjCDQviDQu9GO0LHQstC4INC6INGC0LXQsdC1LiDQlNC70Y8g0LzQtdC9INC30LLRkdC30LTRiyDRjdGC0L4g0YfRgtC+LdGC0L4g0L3QtSDQstGA0LXQvNC10L3QvdC+0LUuICBcbtCn0YLQvi3RgtC+INC00LDQu9GR0LrQvtC1INC4INC+INC90LjRhSDQvNC+0LbQvdC+INGC0L7Qu9GM0LrQviDQvNC10YfRgtCw0YLRjC4g0J/QvtGB0LLQtdC30LDRgtGMINGB0YLQuNGF0LgsINC/0L7RjdC80YsuINCb0Y7QsdC40YLRjCDQuNGFLiDQotGLINC00LvRjyDQvNC10L3RjyDQl9Cy0LXQt9C00LAuXG7QndCw0YjQuCDQvtGC0L3QvtGI0LXQvdC40Y8g0YHQtdC50YfQsNGBINGN0YLQviDRjdGC0LggMTAg0LfQstGR0LfQtC4g0J3QsNGI0LUg0L/RgNC+0YjQu9C+0LUuINCvINGF0L7RgtC10Lsg0LTQvtCx0LDQstC40YLRjCDRgdGO0LTQsCDRhNC+0YLQvi4g0J3QviDRjdGC0L4g0YPQttC1INCx0YvQu9C+LiDQmtCw0LbQtNGL0Lkg0Y/RgNC60LjQuSDQvNC+0LzQtdC90YIgLSDRjdGC0L4g0LfQstC10LfQtNCwLiDQotC+INC60L7Qs9C00LAg0LzRiyDQv9C+0LfQvdCw0LrQvtC80LjQu9C40YHRjC5cbtCS0L/QtdGA0LLRi9C1INC/0L7RhtC10LvQvtCy0LDQu9C40YHRjC4g0KLQviDQutC+0LPQtNCwINGPINC90LAg0J3QkyDRg9Cy0LjQtNC10Lsg0YLQstC+0Y4g0YLQsNGC0YMgKNC00LAg0YHRgtGA0LDQvdC90L4sINC90L4g0LTQu9GPINC80LXQvdGPINGN0YLQviDQsdGL0LvQviDQvdCw0YfQsNC70L4pLiDQp9C10YDQvdC+0LPQvtCy0L7RgNC40Y8pINCS0L7Qu9GI0LXQsdC90L7QtSDQvNC10YHRgtC+LiDQndC1INC40Lct0LfQsCDQv9GA0LjRgNC+0LTRiywg0LAg0YLQviDQutCw0Log0LzRiyDQtdCz0L4g0YLQsNC8INC/0YDQvtCy0LXQu9C4LiBcbtCU0LvRjyDQvNC10L3RjyDRjdGC0L4g0LzQtdGB0YLQviDQstGB0LXQs9C00LAg0L7RgdGC0LDQvdC10YLRgdGPINGC0ZHQv9C70YvQvCDQuCDQvdCw0L/QvtC70L3QtdC90L3Ri9C8INC70Y7QsdC+0LLRjNGOLiDQotC+0LPQtNCwINGPINGD0LLQuNC00LXQuyDQutCw0LrQsNGPINGC0Ysg0LDQutGC0LjQsNC90LDRjyDQuCDQvdC1INC70Y7QsdC40YjRjCDRgdC/0LDRgtGMKSkg0KHQv9Cw0LvQuCDQv9C+IDbRhyDQuCDQvdC+0YDQvCEpINCl0L7Rh9GDINGB0L3QvtCy0LAg0YLQsNC6LiBcbiAgICAgICAgYFxuICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgdGV4dE5leHQ6IEVsZW1lbnQgPSB7XG4gICAgICB0eXBlOiBPQkpFQ1RfVFlQRS5URVhULFxuICAgICAgb2JqZWN0OiBuZXcgU2NlbmVUZXh0KHtcbiAgICAgICAgeDogMjAsXG4gICAgICAgIHk6IDc5MCxcbiAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIG1heFdpZHRoOiA2MDAsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDMwLFxuICAgICAgICB0ZXh0OiBgTGVmdCBjbGljayB0byBzd2l0Y2ggc2NlbmVgXG4gICAgICB9KVxuICAgIH1cbiAgICBlbGVtZW50cy5wdXNoKHRleHQsIHRleHREZXNjcmlwdGlvbiwgdGV4dE5leHQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG59IiwiaW1wb3J0IHtTY2VuZX0gZnJvbSBcIi4vc2NlbmUuaW50ZXJmYWNlXCI7XG5pbXBvcnQge0NvbnN0ZWxsYXRpb24sIEVsZW1lbnQsIE9CSkVDVF9UWVBFfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQge1N0YXJ9IGZyb20gXCIuLi9zdGFyXCI7XG5pbXBvcnQge1NjZW5lVGV4dH0gZnJvbSBcIi4uL3NjZW5lLXRleHRcIjtcbmltcG9ydCB7U3RhckxpbmV9IGZyb20gXCIuLi9zdGFyLWxpbmVcIjtcblxuZXhwb3J0IGNsYXNzIEZpbmFsU2NlbmUgaW1wbGVtZW50cyBTY2VuZXtcbiAgZWxlbWVudHM6IEVsZW1lbnRbXSA9IFtdXG4gIHN0YXJBbW91bnQgPSAxMDAwO1xuICBsZW9Db2xvciA9ICcjZmZmJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb25zdGVsbGF0aW9uOiBDb25zdGVsbGF0aW9uXG4gICkge1xuICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLnNldEVsZW1lbnRzKGNvbnN0ZWxsYXRpb24pO1xuICB9XG5cbiAgc2V0RWxlbWVudHMoY29uc3RlbGxhdGlvbjogQ29uc3RlbGxhdGlvbik6IEVsZW1lbnRbXSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdlbmVyYXRlU3RhcnModGhpcy5zdGFyQW1vdW50LCBbJyNmZmM4YzgnLCAnI2MzZDJmZicsICcjZmZmZmQ2JywgJyNmZmYnXSwgWzEsIDhdKTtcblxuXG4gICAgY29uc3RlbGxhdGlvbi5zdGFycy5mb3JFYWNoKChzdGFyLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAvLyBhZGQgc3RhcnNcbiAgICAgIGNvbnN0IHN0YXJFbGVtOiBFbGVtZW50ID0ge1xuICAgICAgICB0eXBlOiBPQkpFQ1RfVFlQRS5BUkMsXG4gICAgICAgIG9iamVjdDogbmV3IFN0YXIoe1xuICAgICAgICAgIGlkOiBpbmRleCxcbiAgICAgICAgICB4OiBzdGFyLmNvb3JkaW5hdGVzWzBdLFxuICAgICAgICAgIHk6IHN0YXIuY29vcmRpbmF0ZXNbMV0sXG4gICAgICAgICAgY29sb3I6IHRoaXMubGVvQ29sb3JcbiAgICAgICAgfSlcbiAgICAgIH07XG5cbiAgICAgIC8vIGFkZCBzdGFyIHRleHRcbiAgICAgIGlmKHN0YXIudGl0bGUpIHtcbiAgICAgICAgKHN0YXJFbGVtLm9iamVjdCBhcyBTdGFyKS5yYWRpdXMgPSAyMDtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudHMucHVzaChzdGFyRWxlbSk7XG4gICAgICAvLyBhZGQgc3RhcnMgbGluZVxuICAgICAgaWYoY29uc3RlbGxhdGlvbi5jb25uZWN0VG9baW5kZXhdLmxlbmd0aCkge1xuICAgICAgICBjb25zdGVsbGF0aW9uLmNvbm5lY3RUb1tpbmRleF0uZm9yRWFjaChzdGFySW5kZXggPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJMaW5lRWxlbTogRWxlbWVudCA9IHtcbiAgICAgICAgICAgIHR5cGU6IE9CSkVDVF9UWVBFLkxJTkUsXG4gICAgICAgICAgICBvYmplY3Q6IG5ldyBTdGFyTGluZShzdGFyLmNvb3JkaW5hdGVzLCBjb25zdGVsbGF0aW9uLnN0YXJzW3N0YXJJbmRleF0uY29vcmRpbmF0ZXMsIHRoaXMubGVvQ29sb3IpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBlbGVtZW50cy5wdXNoKHN0YXJMaW5lRWxlbSk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0ZXh0XG4gICAgY29uc3QgdGV4dDogRWxlbWVudCA9IHtcbiAgICAgIHR5cGU6IE9CSkVDVF9UWVBFLlRFWFQsXG4gICAgICBvYmplY3Q6IG5ldyBTY2VuZVRleHQoe1xuICAgICAgICB4OiAyMCxcbiAgICAgICAgeTogNDAsXG4gICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgbWF4V2lkdGg6IDYwMCxcbiAgICAgICAgbGluZUhlaWdodDogMzAsXG4gICAgICAgIHRleHQ6IGDQrdGC0L4g0YTQuNC90LDQu9GM0L3QsNGPINGB0YbQtdC90LAuINCc0L3QtSDQvNC90L7Qs9C+0LUg0YXQvtGC0LXQu9C+0YHRjCDQsdGLINC00LDQttC1INGC0YPRgiDQv9C10YDQtdC00LXQu9Cw0YLRjCDQuCDQtNC+0LTQtdC70LDRgtGMLiDQndC+INCy0YDQtdC80LXQvdC4INC90LXRgtGDLiDQryDQstC10YDRjiDRh9GC0L4g0L3QsNGI0LUg0YHQvtC30LLQtdC30LTQuNC1LCDRgdGC0LDQvdC10YIg0YLQvtC70YzQutC+INCx0L7Qu9GM0YjQtS4g0K8g0YLQtdCx0Y8g0L7Rh9C10L3RjCDQu9GO0LHQu9GOLiDQmCDRgtC+INGH0YLQviDRjyDRgtGD0YIg0L3QsNC70LXQv9C40LssINGN0YLQviDRgtCw0LrQuNC1INC80LXQu9C+0YfQuC5gLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzE4MWUyZCdcbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zdCB0ZXh0STogRWxlbWVudCA9IHtcbiAgICAgIHR5cGU6IE9CSkVDVF9UWVBFLlRFWFQsXG4gICAgICBvYmplY3Q6IG5ldyBTY2VuZVRleHQoe1xuICAgICAgICB4OiAyMCxcbiAgICAgICAgeTogNzkwLFxuICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgIG1heFdpZHRoOiA2MDAsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDMwLFxuICAgICAgICB0ZXh0OiBg0K9gLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0TG92ZTogRWxlbWVudCA9IHtcbiAgICAgIHR5cGU6IE9CSkVDVF9UWVBFLlRFWFQsXG4gICAgICBvYmplY3Q6IG5ldyBTY2VuZVRleHQoe1xuICAgICAgICB4OiA3MCxcbiAgICAgICAgeTogNzkwLFxuICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgIGNvbG9yOiAnIzAwNThiNScsXG4gICAgICAgIG1heFdpZHRoOiA2MDAsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDMwLFxuICAgICAgICB0ZXh0OiBg0KLQtdCx0LVgLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0WW91OiBFbGVtZW50ID0ge1xuICAgICAgdHlwZTogT0JKRUNUX1RZUEUuVEVYVCxcbiAgICAgIG9iamVjdDogbmV3IFNjZW5lVGV4dCh7XG4gICAgICAgIHg6IDE4MCxcbiAgICAgICAgeTogNzkwLFxuICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgIGNvbG9yOiAnI2Y3Y2UwMCcsXG4gICAgICAgIG1heFdpZHRoOiA2MDAsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDMwLFxuICAgICAgICB0ZXh0OiBg0JrQvtGF0LDRjmAsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGVsZW1lbnRzLnB1c2godGV4dCwgdGV4dEksIHRleHRMb3ZlLCB0ZXh0WW91KTtcbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlU3RhcnMoYW1vdW50OiBudW1iZXIsIGNvbG9yczogc3RyaW5nW10sIHJhZGl1c0VkZ2U6IFtudW1iZXIsIG51bWJlcl0pOiBFbGVtZW50W10ge1xuICAgIGNvbnN0IHN0YXJzOiBFbGVtZW50W10gPSBbXVxuICAgIGZvcihsZXQgaSA9IDAsIHggPSBhbW91bnQ7IGkgPCB4OyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbG9ySW5kZXggPSBGaW5hbFNjZW5lLmdldFJhbmRvbUludCgwLCBjb2xvcnMubGVuZ3RoIC0gMSk7XG4gICAgICBjb25zdCByYWRpdXMgPSBGaW5hbFNjZW5lLmdldFJhbmRvbUludChyYWRpdXNFZGdlWzBdLCByYWRpdXNFZGdlWzFdKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy5nZXRSYW5kb21Db29yZGluYXRlcygpO1xuICAgICAgc3RhcnMucHVzaCh7XG4gICAgICAgIHR5cGU6IE9CSkVDVF9UWVBFLkFSQyxcbiAgICAgICAgb2JqZWN0OiBuZXcgU3Rhcih7XG4gICAgICAgICAgaWQ6IGksXG4gICAgICAgICAgeDogY29vcmRpbmF0ZXNbMF0sXG4gICAgICAgICAgeTogY29vcmRpbmF0ZXNbMV0sXG4gICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgIGNvbG9yOiBjb2xvcnNbY29sb3JJbmRleF1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBzdGFyc1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSYW5kb21Db29yZGluYXRlcygpOltudW1iZXIsIG51bWJlcl0ge1xuICAgIHJldHVybiBbXG4gICAgICBGaW5hbFNjZW5lLmdldFJhbmRvbUludCgxMCwgMTkwMCksXG4gICAgICBGaW5hbFNjZW5lLmdldFJhbmRvbUludCgxMCwgNzUwKSxcbiAgICBdXG4gIH1cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY29uc3RlbGxhdGlvbi5zY2VuZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0YXJ0LnNjZW5lJztcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUuZW51bSc7XG5leHBvcnQgKiBmcm9tICcuL3NjZW5lLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3RleHQuc2NlbmUnO1xuZXhwb3J0ICogZnJvbSAnLi90ZXh0XzIuc2NlbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9maW5hbC5zY2VuZSc7IiwiZXhwb3J0IGVudW0gU2NlbmVUeXBlIHtcbiAgU3RhcnRcbn0iLCJpbXBvcnQge0NvbnN0ZWxsYXRpb24sIEVsZW1lbnQsIE9CSkVDVF9UWVBFfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lIHtcbiAgZWxlbWVudHM6IEVsZW1lbnRbXTtcbiAgc2V0RWxlbWVudHM6IEZ1bmN0aW9uO1xufSIsImltcG9ydCB7U2NlbmV9IGZyb20gXCIuLi9zY2VuZS9zY2VuZS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7U2NlbmVUZXh0fSBmcm9tIFwiLi4vc2NlbmUtdGV4dFwiO1xuaW1wb3J0IHtPQkpFQ1RfVFlQRSwgRWxlbWVudH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhcnRTY2VuZSBpbXBsZW1lbnRzIFNjZW5le1xuICBlbGVtZW50czogRWxlbWVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lbGVtZW50cyA9IHRoaXMuc2V0RWxlbWVudHMoKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRzKCk6IEVsZW1lbnRbXXtcbiAgICBjb25zdCBlbGVtZW50czogRWxlbWVudFtdID0gW107XG4gICAgY29uc3QgY2VudGVyWCA9IDE5MzAgLyAyO1xuICAgIGNvbnN0IGNlbnRlclkgPSA4MDAgLyAyO1xuXG5cbiAgICBlbGVtZW50cy5wdXNoKHtcbiAgICAgIHR5cGU6IE9CSkVDVF9UWVBFLlRFWFQsXG4gICAgICBvYmplY3Q6IG5ldyBTY2VuZVRleHQoe1xuICAgICAgICB4OiBjZW50ZXJYLFxuICAgICAgICB5OiBjZW50ZXJZLFxuICAgICAgICBmb250U2l6ZTogMTAwLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICB0ZXh0OiAnMTAgU3RhcnMnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgZWxlbWVudHMucHVzaCh7XG4gICAgICB0eXBlOiBPQkpFQ1RfVFlQRS5URVhULFxuICAgICAgb2JqZWN0OiBuZXcgU2NlbmVUZXh0KHtcbiAgICAgICAgeDogY2VudGVyWCxcbiAgICAgICAgeTogY2VudGVyWSArIDUwLFxuICAgICAgICBmb250U2l6ZTogMzAsXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgIHRleHQ6ICdMZWZ0IGNsaWNrIHRvIGNoYW5nZSBhIHNjZW5lJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cbn0iLCJpbXBvcnQge0NvbnN0ZWxsYXRpb24sIEVsZW1lbnQsIE9CSkVDVF9UWVBFfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtTY2VuZX0gZnJvbSAnLi9zY2VuZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtTY2VuZVRleHR9IGZyb20gXCIuLi9zY2VuZS10ZXh0XCI7XG5pbXBvcnQge1N0YXJ9IGZyb20gXCIuLi9zdGFyXCI7XG5pbXBvcnQge1N0YXJMaW5lfSBmcm9tIFwiLi4vc3Rhci1saW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBUZXh0U2NlbmUgaW1wbGVtZW50cyBTY2VuZXtcbiAgZWxlbWVudHM6IEVsZW1lbnRbXSA9IFtdO1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb25zdGVsbGF0aW9uOiBDb25zdGVsbGF0aW9uXG4gICkge1xuICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLnNldEVsZW1lbnRzKGNvbnN0ZWxsYXRpb24pO1xuICB9XG5cbiAgc2V0RWxlbWVudHMoY29uc3RlbGxhdGlvbjogQ29uc3RlbGxhdGlvbik6IEVsZW1lbnRbXSB7XG4gICAgY29uc3QgZWxlbWVudHM6IEVsZW1lbnRbXSA9IFtdXG5cblxuICAgIGNvbnN0ZWxsYXRpb24uc3RhcnMuZm9yRWFjaCgoc3RhciwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgLy8gYWRkIHN0YXJzXG4gICAgICBjb25zdCBzdGFyRWxlbTogRWxlbWVudCA9IHtcbiAgICAgICAgdHlwZTogT0JKRUNUX1RZUEUuQVJDLFxuICAgICAgICBvYmplY3Q6IG5ldyBTdGFyKHtcbiAgICAgICAgICBpZDogaW5kZXgsXG4gICAgICAgICAgeDogc3Rhci5jb29yZGluYXRlc1swXSArIDM1MCxcbiAgICAgICAgICB5OiBzdGFyLmNvb3JkaW5hdGVzWzFdXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgICAgZWxlbWVudHMucHVzaChzdGFyRWxlbSk7XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgc3RhciBsaW5lc1xuICAgIGNvbnN0IHN0YXJzID0gZWxlbWVudHMuZmlsdGVyKCBlbGVtID0+IGVsZW0udHlwZSA9PT0gT0JKRUNUX1RZUEUuQVJDKTtcbiAgICBzdGFycy5mb3JFYWNoKChzdGFyRWxlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXIgPSBzdGFyRWxlbS5vYmplY3QgYXMgU3RhcjtcbiAgICAgICAgLy8gYWRkIHN0YXJzIGxpbmVcbiAgICAgICAgaWYoY29uc3RlbGxhdGlvbi5jb25uZWN0VG9baW5kZXhdLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0ZWxsYXRpb24uY29ubmVjdFRvW2luZGV4XS5mb3JFYWNoKHN0YXJJbmRleCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b1N0YXIgPSBzdGFyc1tzdGFySW5kZXhdLm9iamVjdCBhcyBTdGFyO1xuICAgICAgICAgICAgY29uc3Qgc3RhckxpbmVFbGVtOiBFbGVtZW50ID0ge1xuICAgICAgICAgICAgICB0eXBlOiBPQkpFQ1RfVFlQRS5MSU5FLFxuICAgICAgICAgICAgICBvYmplY3Q6IG5ldyBTdGFyTGluZShbY3VycmVudFN0YXIueCwgY3VycmVudFN0YXIueV0sIFt0b1N0YXIueCwgdG9TdGFyLnldKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goc3RhckxpbmVFbGVtKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KTtcblxuXG4gICAgLy8gc2V0IHRleHRcbiAgICBjb25zdCB0ZXh0OiBFbGVtZW50ID0ge1xuICAgICAgdHlwZTogT0JKRUNUX1RZUEUuVEVYVCxcbiAgICAgIG9iamVjdDogbmV3IFNjZW5lVGV4dCh7XG4gICAgICAgIHg6IDIwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgZm9udFNpemU6IDYwLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICB0ZXh0OiAnMTAgU3RhcnMnXG4gICAgICB9KVxuICAgIH1cbiAgICBjb25zdCB0ZXh0RGVzY3JpcHRpb246IEVsZW1lbnQgPSB7XG4gICAgICB0eXBlOiBPQkpFQ1RfVFlQRS5URVhULFxuICAgICAgb2JqZWN0OiBuZXcgU2NlbmVUZXh0KHtcbiAgICAgICAgeDogMjAsXG4gICAgICAgIHk6IDEyMCxcbiAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICBtYXhXaWR0aDogOTAwLFxuICAgICAgICBsaW5lSGVpZ2h0OiAzMCxcbiAgICAgICAgdGV4dDogYNCYINGPINC30L3QsNGOINGH0YLQviDRgtCw0Log0LHRg9C00LXRgi4g0J3QtSDRgtC+0LvRjNC60L4g0L/QvtGC0L7QvNGDLCDRh9GC0L4g0LzRiyDRgdC90L7QstCwINCx0YPQtNC10YIg0L/Rg9GC0LXRiNC10YHRgtCy0L7QstCw0YLRjC4g0JAg0L/QvtGC0L7QvNGDLCDRh9GC0L4g0LTQtdGC0LguINCd0LUg0LTRg9C80LDRjiwg0YfRgtC+INC80Ysg0LHRg9C00LXQvCDQvNC90L7Qs9C+INGB0L/QsNGC0YwuINCa0LDQttC00LDRjyDQt9Cy0LXQt9C00LAsINGN0YLQviDQvNC+0LzQtdC90YIg0LjQtyDQvdCw0YjQtdC5INC20LjQt9C90LguICBcbtCv0YDQutC40LkhINCi0YPRgdC60LvRi9C5LCDQv9C+0YDQvtC5INGN0YLQviDRgdCy0LXRgNGF0L3QvtCy0LDRjyDQutC+0YLQvtGA0LDRjyDQstC+0YIg0LLQvtGCINGB0YLQsNC90LXRgiDQp9GR0YDQvdC+0Lkg0LTRi9GA0L7QuS4g0J3QviDRjdGC0L4g0LLRgdC1INC10YHRgtGMINCyINC90LDRiNC40YUg0L7RgtC90L7RiNC10L3QuNGP0YUuINCf0LvQvtGF0LjQtSDQuCDRhdC+0YDQvtGI0LjQtSDQtNC90LguINCYINGPINGG0LXQvdGOINC60LDQttC00YvQuSDQuNC3INC90LjRhS4g0J/QvtC60LAg0YfRgtC+INGC0YPRgiDQstGB0LXQs9C+IDEwINC30LLRkdC30LQuXG7QotGD0YIg0LrQsNC20LTQsNGPINC30LLQtdC30LTQsCDRjdGC0L4g0L3QsNGI0LAg0LjRgdGC0L7RgNC40Y8g0L/QviDQutGA0YPQv9C40L3QutCw0YUg0Lgg0LrQsNC6INCy0LjQtNC40YjRjCDQvtC90Lgg0Y/RgNC60LjQtS4g0K3RgtC4INC/0LDRgNGDINC00L3QtdC5INC60LDQuiDRgtC+INC/0LXRgNC10LLQtdGA0L3Rg9C70Lgg0LzQvtGRINCy0L7RgdC/0YDQuNGP0YLQuNGPINGC0LXQsdGPLiDQryDQv9GA0L7RgdGC0L4g0LfQsNGI0LXQuyDRgSDQtNGA0YPQs9C+0Lkg0YHRgtC+0YDQvtC90YsuINCf0L4g0LTRgNGD0LPQvtC80YMg0L3QsCDRgtC10LHRjyDQv9C+0YHQvNC+0YLRgNC10LsuXG7QryDRgdC70L7QstC90L4g0LLRgdC/0L7QvNC90LjQuywg0YLQviDRh9GC0L4g0LfQsNCx0YvQuy4g0K3RgtC+INC60LDQuiDQstGB0L/QvtC80L3QuNGC0Ywg0YHQu9C+0LLQviDQv9C10YDQtdC0INGB0L3QvtC8LCDQutC+0YLQvtGA0L7QtSDRgdGC0LDRgNCw0LvRgdGPINCy0YHQv9C+0LzQvdC40YLRjCDRgSDRgdCw0LzQvtCz0L4g0YPRgtGA0LAuINCi0LXQv9C10YDRjCDRgdC80L7RgtGA0Y8g0L3QsCDRjdGC0Lgg0LTQvdC4INC/0L7QtCDQtNGA0YPQs9C40Lwg0YPQs9C70L7QvCwg0Y8g0L/QvtC90Y/Quy4g0K8g0YDQsNC30YDRg9GI0LDQuyDQt9Cy0ZHQt9C00YsuXG7QotC+LCDRh9GC0L4g0YHRgtGA0L7QuNC70L7RgdGMINCz0L7QtNCw0LzQuCwg0LLRi9C60LvQsNC00YvQstCw0LvQvtGB0Ywg0LIg0YHQvtC30LLQtdC30LTQuNGPLiDQryDRiNCw0LMg0LfQsCDRiNCw0LPQvtC8LCDQt9Cy0LXQt9C00LAg0LfQsCDQt9Cy0LXQt9C00L7QuSwg0YPQvdC40YfRgtC+0LbQsNC7LiDQnNC90LUg0L7Rh9C10L3RjCDQttCw0LvRjCwg0YfRgtC+INGPINGD0L3QuNGH0YLQvtC20LDQuyDRjdGC0YMg0LrRgNCw0YHQvtGC0YMg0Lgg0YLQtdC8LCDRh9GC0L4g0L7QvdCwINC80L7Qs9C70LAg0YHRgtCw0YLRjCEgXG7Ql9CwINGN0YLQviDRjyDQtdGJ0ZEg0LTQvtC70LPQviDQsdGD0LTRgyDQsiDQvtGC0LLQtdGC0LUuINCd0L4g0Y8g0LzQvtCz0YMg0Lgg0LLQvtGB0YHQvtC30LTQsNGC0Ywg0Lgg0L/QvtGB0YLRgNC+0LjRgtGMINGC0L4sINGH0YLQviDQv9GA0LXQstC30L7QudC00ZHRgiDQv9GA0LXQtNGL0LTRg9GJ0LjQtSDRg9GB0L/QtdGF0LguINCX0LLRkdC30LTRiyDRgdGC0LDQvdGD0YIg0Y/RgNGH0LUsINCx0L7Qu9GM0YjQtSDQuCDQuNGFINC60L7Qu9C40YfQtdGB0YLQstC+INC/0YDQuNCx0YPQtNC10YIhINCf0L7RgtC+0LzRgyDRh9GC0L4g0LzQvdC1INC10YHRgtGMINGA0LDQtNC4INC60L7Qs9C+INGN0YLQviDQtNC10LvQsNGC0YwhXG7QryDQvdC10LTQsNCy0L3QviDRgdC60LDQt9Cw0Lsg0YfRgtC+INGPINCyINC/0L7Qu9C90L7QuSDQsNC/0LDRgtC40LguINCi0LDQuiDQuCDQtdGB0YLRjC4g0J3QviDRgSDRjdGC0L7QuSDQsNC/0LDRgtC40LXQuSDRjyDRgtC+0LvRjNC60L4g0L/QvtC90Y/Quywg0YfRgtC+INGN0YLQviDQv9C40YIg0YHRgtC+0L8sINC/0LXRgNC10LQg0LHQvtC70YzRiNC40Lwg0YLQvtC70YfQutC+0LwuINCvINGB0LzQvtCz0YMuINCvINGB0LTQtdC70LDRjiDRjdGC0L4g0YHQvtC30LLQtdC30LTQuNC1IC0g0LPQsNC70LDQutGC0LjQutC+0LkhXG7QmCDQtNC70Y8g0Y3RgtC+0LPQviDRhdCy0LDRgtC40YIgMdC5INC/0YDQuNGH0LjQvdGLLiDQotGLIVxu0K8g0YLQtdCx0Y8g0L7Rh9C10L3RjCDQu9GO0LHQu9GOINC4INGPINC/0L7QvdC40LzQsNGOINGC0L4sINGH0YLQviDRjyDRgdC00LXQu9Cw0LsgLSDRjdGC0L4g0L3QuNGH0YLQviDQuCDRgdC60L7RgNC10LUg0LLRgdC10LPQviDRjyDRgtC10LHRjyDQvdC1INGD0LHQtdC00LjQuy4g0J3QviDRjyDQstGB0ZEg0YDQsNCy0L3QviDQsdGD0LTRgyDQv9GL0YLQsNGC0YzRgdGPLiDQmtCw0Log0L3QuCDQutCw0Log0YHRgtGA0L7QuNGC0Ywg0LPQsNC70LDQutGC0LjQutC4INC90LUg0LvQtdCz0LrQvi4gXG7QoyDQvNC10L3RjyDQsdGL0LvQviDQvNC90L7Qs9C+INC40LTQtdC5INC60LDQuiDQstGB0ZEg0YHQtNC10LvQsNGC0Ywg0Lgg0LDQvdC40LzQsNGG0LjQuCDQuCDQvNGL0YHQu9C4LiDQndC+INGPINC90LUg0YXQvtGH0YMg0YLQtdCx0Y8g0YPRgtC+0LzQu9GP0YLRjCwg0LTQsCDQuCDQstGA0LXQvNC10L3QuCDQvNCw0LvQvi4g0K8g0YXQvtGH0YMg0LTQvtC90LXRgdGC0LgsINGH0YLQviDRjyDQvtGI0LjQsdCw0LvRgdGPLiDQryDRgtGD0YjQuNC7INC30LLRkdC30LTRiy4g0KPQsdC40LLQsNC7INCyINGC0LXQsdC1INGC0L4sXG7Rh9GC0L4g0L/QvtC80L7Qs9Cw0LvQviDQvNC90LUg0LbQtSDQtNCy0LjQs9Cw0YLRjNGB0Y8g0LTQsNC70YzRiNC1ISDQotC10YHRgtGMINGB0LDQvCDRgdC10LHQtSDRhdGD0LbQtSDQuCDQtNC10LvQsNC7LiDQn9Cg0L7RgdGC0L4g0LjQty3Qt9CwINGB0LLQvtC40YUg0L3QtdC60LjRhSDQvtCx0LjQtNC+0LosINCw0LYg0YHQsNC80L7QvNGDINC/0YDQvtGC0LjQstC90L4uINCvINGF0L7Rh9GDINC/0L7QtNCw0YDQuNGC0Ywg0YLQtdCx0LUg0L/QvtC60LAg0YfRgtC+INGN0YLRgyDRhtC40YTRgNC+0LLRg9GOINCz0LDQu9Cw0LrRgtC40LrRgy5cbiAgICAgICAgYFxuICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgdGV4dE5leHQ6IEVsZW1lbnQgPSB7XG4gICAgICB0eXBlOiBPQkpFQ1RfVFlQRS5URVhULFxuICAgICAgb2JqZWN0OiBuZXcgU2NlbmVUZXh0KHtcbiAgICAgICAgeDogMjAsXG4gICAgICAgIHk6IDc5MCxcbiAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIG1heFdpZHRoOiA2MDAsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDMwLFxuICAgICAgICB0ZXh0OiBgTGVmdCBjbGljayB0byBzd2l0Y2ggc2NlbmVgXG4gICAgICB9KVxuICAgIH1cbiAgICBlbGVtZW50cy5wdXNoKHRleHQsIHRleHREZXNjcmlwdGlvbiwgdGV4dE5leHQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG59XG4iLCJpbXBvcnQge1NjZW5lfSBmcm9tIFwiLi4vc2NlbmUvc2NlbmUuaW50ZXJmYWNlXCI7XG5pbXBvcnQge1NjZW5lVGV4dH0gZnJvbSBcIi4uL3NjZW5lLXRleHRcIjtcbmltcG9ydCB7T0JKRUNUX1RZUEUsIEVsZW1lbnQsIENvbnN0ZWxsYXRpb259IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7U3Rhcn0gZnJvbSBcIi4uL3N0YXJcIjtcbmltcG9ydCB7U3RhckxpbmV9IGZyb20gXCIuLi9zdGFyLWxpbmVcIjtcblxuZXhwb3J0IGNsYXNzIFRleHRfMlNjZW5lIGltcGxlbWVudHMgU2NlbmV7XG4gIGVsZW1lbnRzOiBFbGVtZW50W10gPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgY29uc3RlbGxhdGlvbjogQ29uc3RlbGxhdGlvblxuICApIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gdGhpcy5zZXRFbGVtZW50cyhjb25zdGVsbGF0aW9uKTtcbiAgfVxuXG5cbiAgc2V0RWxlbWVudHMoY29uc3RlbGxhdGlvbjogQ29uc3RlbGxhdGlvbik6IEVsZW1lbnRbXSB7XG4gICAgY29uc3QgZWxlbWVudHM6IEVsZW1lbnRbXSA9IFtdXG5cblxuICAgIGNvbnN0ZWxsYXRpb24uc3RhcnMuZm9yRWFjaCgoc3RhciwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgLy8gYWRkIHN0YXJzXG4gICAgICBjb25zdCBzdGFyRWxlbTogRWxlbWVudCA9IHtcbiAgICAgICAgdHlwZTogT0JKRUNUX1RZUEUuQVJDLFxuICAgICAgICBvYmplY3Q6IG5ldyBTdGFyKHtcbiAgICAgICAgICBpZDogaW5kZXgsXG4gICAgICAgICAgeDogc3Rhci5jb29yZGluYXRlc1swXSArIDM1MCxcbiAgICAgICAgICB5OiBzdGFyLmNvb3JkaW5hdGVzWzFdXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgICAgZWxlbWVudHMucHVzaChzdGFyRWxlbSk7XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgc3RhciBsaW5lc1xuICAgIGNvbnN0IHN0YXJzID0gZWxlbWVudHMuZmlsdGVyKCBlbGVtID0+IGVsZW0udHlwZSA9PT0gT0JKRUNUX1RZUEUuQVJDKTtcbiAgICBzdGFycy5mb3JFYWNoKChzdGFyRWxlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTdGFyID0gc3RhckVsZW0ub2JqZWN0IGFzIFN0YXI7XG4gICAgICAvLyBhZGQgc3RhcnMgbGluZVxuICAgICAgaWYoY29uc3RlbGxhdGlvbi5jb25uZWN0VG9baW5kZXhdLmxlbmd0aCkge1xuICAgICAgICBjb25zdGVsbGF0aW9uLmNvbm5lY3RUb1tpbmRleF0uZm9yRWFjaChzdGFySW5kZXggPT4ge1xuICAgICAgICAgIGNvbnN0IHRvU3RhciA9IHN0YXJzW3N0YXJJbmRleF0ub2JqZWN0IGFzIFN0YXI7XG4gICAgICAgICAgY29uc3Qgc3RhckxpbmVFbGVtOiBFbGVtZW50ID0ge1xuICAgICAgICAgICAgdHlwZTogT0JKRUNUX1RZUEUuTElORSxcbiAgICAgICAgICAgIG9iamVjdDogbmV3IFN0YXJMaW5lKFtjdXJyZW50U3Rhci54LCBjdXJyZW50U3Rhci55XSwgW3RvU3Rhci54LCB0b1N0YXIueV0pXG4gICAgICAgICAgfTtcbiAgICAgICAgICBlbGVtZW50cy5wdXNoKHN0YXJMaW5lRWxlbSk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIHNldCB0ZXh0XG4gICAgY29uc3QgdGV4dDogRWxlbWVudCA9IHtcbiAgICAgIHR5cGU6IE9CSkVDVF9UWVBFLlRFWFQsXG4gICAgICBvYmplY3Q6IG5ldyBTY2VuZVRleHQoe1xuICAgICAgICB4OiAyMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIGZvbnRTaXplOiA2MCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgdGV4dDogJzEwIFN0YXJzJ1xuICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgdGV4dERlc2NyaXB0aW9uOiBFbGVtZW50ID0ge1xuICAgICAgdHlwZTogT0JKRUNUX1RZUEUuVEVYVCxcbiAgICAgIG9iamVjdDogbmV3IFNjZW5lVGV4dCh7XG4gICAgICAgIHg6IDIwLFxuICAgICAgICB5OiAxMjAsXG4gICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgbWF4V2lkdGg6IDkwMCxcbiAgICAgICAgbGluZUhlaWdodDogMzAsXG4gICAgICAgIHRleHQ6IGDQndC+INGBINC60LDQttC00YvQvCDQvNCw0LvQtdC90YzQutC40Lwg0Lgg0LHQvtC70YzRiNC40Lwg0YjQsNCz0L7QvCwg0L7QvdCwINCx0YPQtNC10YIg0YDQsNGB0YjQuNGA0Y/RgtGM0YHRjy4g0K8g0L7Rh9C10L3RjCDQvdCw0LTQtdGO0YHRjCDRh9GC0L4g0LIg0YHQutC+0YDQvtC8INCx0YPQtNGD0YnQtdC8LCDRjdGC0LAg0LPQsNC70LDQutGC0LjQutCwINCx0YPQtNC10YIg0Y/QstGM0Y4uINCvINGC0LXQsdGPINC+0YfQtdC90Ywg0LvRjtCx0LvRji5cbtCvINC/0L7QvdC40LzQsNGOLCDRh9GC0L4g0Y8g0YLRg9GCINC90LDQv9C40YHQsNC7INC80L3QvtCz0L4uINCYINGB0L3QvtCy0LAsINGPINGN0YLQviDQtdGJ0ZEg0L/QvtGH0LjRgdGC0LjQu9C+LiDQrdGC0L4g0Y8g0Log0YLQvtC80YMsINGH0YLQvtGDINC80LXQvdGPINGB0LrQvtGA0LXQtSDQv9GA0L7RgdGC0L4g0YPRgdGC0LDQvdGD0YIg0L/QsNC70YzRhtGLINC/0LXRh9Cw0YLQsNGC0YwsINGH0LXQvCDRjyDRgdC80L7Qs9GDINGB0LrQsNC30LDRgtGMINC60LDQuiDRgdC40LvRjNC90L4g0Y8g0YLQtdCx0Y8g0LvRjtCx0LvRji5gXG4gICAgICB9KVxuICAgIH1cbiAgICBjb25zdCB0ZXh0TmV4dDogRWxlbWVudCA9IHtcbiAgICAgIHR5cGU6IE9CSkVDVF9UWVBFLlRFWFQsXG4gICAgICBvYmplY3Q6IG5ldyBTY2VuZVRleHQoe1xuICAgICAgICB4OiAyMCxcbiAgICAgICAgeTogNzkwLFxuICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgbWF4V2lkdGg6IDYwMCxcbiAgICAgICAgbGluZUhlaWdodDogMzAsXG4gICAgICAgIHRleHQ6IGBMZWZ0IGNsaWNrIHRvIHN3aXRjaCBzY2VuZWBcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsZW1lbnRzLnB1c2godGV4dCwgdGV4dERlc2NyaXB0aW9uLCB0ZXh0TmV4dCk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3N0YXItbGluZSc7IiwiXG5leHBvcnQgY2xhc3MgU3RhckxpbmUge1xuICBmcm9tWDogbnVtYmVyO1xuICBmcm9tWTogbnVtYmVyO1xuICB0b1g6IG51bWJlcjtcbiAgdG9ZOiBudW1iZXI7XG4gIHdpZHRoID0gNTtcbiAgY29sb3IgPScjZmZmJ1xuICBwYWRkaW5nID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBmcm9tOiBBcnJheTxudW1iZXI+LFxuICAgIHRvOiBBcnJheTxudW1iZXI+LFxuICAgIGNvbG9yPzogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuZnJvbVggPSBmcm9tWzBdO1xuICAgIHRoaXMuZnJvbVkgPSBmcm9tWzFdO1xuICAgIHRoaXMudG9YID0gdG9bMF07XG4gICAgdGhpcy50b1kgPSB0b1sxXTtcblxuICAgIGlmKGNvbG9yKSB7XG4gICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9zdGFyJzsiLCJleHBvcnQgY2xhc3MgU3RhciB7XG4gIHB1YmxpYyByYWRpdXMgPSAxMDtcbiAgcHVibGljIGNvbG9yID0gJyNmZmYnO1xuICBpZDogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBvcHRpb25zOiB7XG4gICAgICBpZDogbnVtYmVyLFxuICAgICAgeDogbnVtYmVyLFxuICAgICAgeTogbnVtYmVyLFxuICAgICAgcmFkaXVzPzogbnVtYmVyLFxuICAgICAgY29sb3I/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuXG4gICAgY29uc3Qge2lkLCB4LCB5LCByYWRpdXMsIGNvbG9yfSA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIGlmKHJhZGl1cykge1xuICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuICAgIGlmKGNvbG9yKSB7XG4gICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICB9XG5cbn0iLCJpbXBvcnQge1N0YXJ9IGZyb20gJy4uL3N0YXIvc3Rhcic7XG5pbXBvcnQge09CSkVDVF9UWVBFfSBmcm9tICcuLi9tb2RlbHMvb2JqZWN0LXR5cGUuZW51bSc7XG5pbXBvcnQge0VsZW1lbnR9IGZyb20gJy4uL21vZGVscy9lbGVtZW50LmludGVyZmFjZSc7XG5pbXBvcnQge1NjZW5lfSBmcm9tICcuLi9zY2VuZSc7XG5pbXBvcnQge1N0YXJMaW5lfSBmcm9tIFwiLi4vc3Rhci1saW5lXCI7XG5pbXBvcnQge1NjZW5lVGV4dH0gZnJvbSBcIi4uL3NjZW5lLXRleHRcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXJGaWVsZCB7XG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICB3aWR0aDtcbiAgaGVpZ2h0O1xuICBjYW52YXM7XG4gIGVsZW1lbnRzOiBBcnJheTxFbGVtZW50PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgfVxuXG4gIGRyYXdTdGFyKHN0YXI6IFN0YXIpIHtcbiAgICB0aGlzLmFyYyhzdGFyKTtcbiAgfVxuXG4gIGRyYXdTdGFyTGluZShsaW5lOiBTdGFyTGluZSkge1xuICAgIHRoaXMubGluZShsaW5lKTtcbiAgfVxuXG4gIGRyYXdUZXh0KHRleHRTY2VuZTogU2NlbmVUZXh0KSB7XG4gICAgdGhpcy50ZXh0KHRleHRTY2VuZSk7XG4gIH1cblxuICBsaW5lKGxpbmU6IFN0YXJMaW5lKSB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gbGluZS5jb2xvcjtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSBsaW5lLndpZHRoO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyhsaW5lLmZyb21YLCBsaW5lLmZyb21ZKTtcbiAgICB0aGlzLmN0eC5saW5lVG8obGluZS50b1gsIGxpbmUudG9ZKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgYXJjKHN0YXJ0OiBTdGFyKSB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHN0YXJ0LmNvbG9yO1xuICAgIHRoaXMuY3R4LmFyYyhzdGFydC54LCBzdGFydC55LCBzdGFydC5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgdGV4dChvcHRpb25zOiBTY2VuZVRleHQpIHtcbiAgICBjb25zdCB7eCwgeSwgZm9udFNpemUsIGNvbG9yLCB0ZXh0LCB0ZXh0QWxpZ24sIG1heFdpZHRoLCBsaW5lSGVpZ2h0LCBiYWNrZ3JvdW5kIH0gPSBvcHRpb25zO1xuXG4gICAgY29uc3QgZHJhVGV4dCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHdvcmRzID0gdGV4dC5zcGxpdChcIiBcIik7XG4gICAgICBjb25zdCBjb3VudFdvcmRzID0gd29yZHMubGVuZ3RoO1xuICAgICAgbGV0IGxpbmUgPSBcIlwiO1xuICAgICAgbGV0IG1hcmdpbkxlZnQgPSB4O1xuICAgICAgbGV0IG1hcmdpblRvcCA9IHk7XG4gICAgICBjb25zdCBsaW5lcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGNvdW50V29yZHM7IG4rKykge1xuICAgICAgICBjb25zdCB0ZXN0TGluZSA9IGxpbmUgKyB3b3Jkc1tuXSArIFwiIFwiO1xuICAgICAgICBjb25zdCB0ZXN0V2lkdGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXN0TGluZSkud2lkdGg7XG4gICAgICAgIGlmICh0ZXN0V2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgdGV4dDogbGluZSxcbiAgICAgICAgICAgIHg6IG1hcmdpbkxlZnQsXG4gICAgICAgICAgICB5OiBtYXJnaW5Ub3BcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgbGluZSA9IHdvcmRzW25dICsgXCIgXCI7XG4gICAgICAgICAgbWFyZ2luVG9wICs9IGxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGluZSA9IHRlc3RMaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaW5lcy5wdXNoKHtcbiAgICAgICAgdGV4dDogbGluZSxcbiAgICAgICAgeDogbWFyZ2luTGVmdCxcbiAgICAgICAgeTogbWFyZ2luVG9wXG4gICAgICB9KTtcblxuICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kXG4gICAgICBpZihiYWNrZ3JvdW5kKSB7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGJhY2tncm91bmQ7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHggLSAyMCwgeSAtIGxpbmVIZWlnaHQsIHggKyBtYXhXaWR0aCwgbWFyZ2luVG9wKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgIH1cblxuICAgICAgLy8gZHJhdyB0ZXh0XG4gICAgICBsaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChsaW5lLnRleHQsIGxpbmUueCwgbGluZS55KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggc2Fucy1zZXJpZmA7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gdGV4dEFsaWduO1xuICAgIGRyYVRleHQoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBhZGRFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShjYjogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY2IoZS54IC0gZS50YXJnZXQub2Zmc2V0TGVmdCwgZS55IC0gZS50YXJnZXQub2Zmc2V0VG9wKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhlbGVtZW50czogRWxlbWVudFtdKSB7XG4gICAgZWxlbWVudHMuc29ydCgoYSwgYik6IGFueSA9PiBhLnR5cGUgPiBiLnR5cGUpXG4gICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmKGVsZW1lbnQudHlwZSA9PT0gT0JKRUNUX1RZUEUuQVJDKSB7XG4gICAgICAgIHRoaXMuZHJhd1N0YXIoZWxlbWVudC5vYmplY3QgYXMgU3Rhcik7XG4gICAgICB9XG4gICAgICBpZihlbGVtZW50LnR5cGUgPT09IE9CSkVDVF9UWVBFLkxJTkUpIHtcbiAgICAgICAgdGhpcy5kcmF3U3RhckxpbmUoZWxlbWVudC5vYmplY3QgYXMgU3RhckxpbmUpO1xuICAgICAgfVxuICAgICAgaWYoZWxlbWVudC50eXBlID09PSBPQkpFQ1RfVFlQRS5URVhUKSB7XG4gICAgICAgIHRoaXMuZHJhd1RleHQoZWxlbWVudC5vYmplY3QgYXMgU2NlbmVUZXh0KTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0U2NlbmUoc2NlbmU6IFNjZW5lKSB7XG4gICAgdGhpcy5kcmF3RWxlbWVudHMoc2NlbmUuZWxlbWVudHMpO1xuICB9XG5cbiAgY2xlYXJTY2VuZSgpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCAnLi9hcHAvYXBwJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==