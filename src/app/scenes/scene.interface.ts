import {Constellation, Element, OBJECT_TYPE} from '../models';

export interface Scene {
  elements: Element[];
  setElements: Function;
}