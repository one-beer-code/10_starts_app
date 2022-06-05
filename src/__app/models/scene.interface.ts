import {SCENE_TYPE} from  '../constants';

export interface Scene {
  type: SCENE_TYPE;
  render: (timeStamp?: number) => void;
}
