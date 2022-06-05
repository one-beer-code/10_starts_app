import {OBJECT_TYPE} from "./object-type.enum";
import {Star} from "../star";
import {StarLine} from "../star-line";
import {SceneText} from "../scene-text";

export interface Element {
  type: OBJECT_TYPE;
  object: Star | StarLine | SceneText
}