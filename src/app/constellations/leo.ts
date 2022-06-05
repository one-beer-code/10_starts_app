import {Constellation} from '../models';

export const Leo: Constellation = {
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