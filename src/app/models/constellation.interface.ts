export interface Constellation{
  title: string;
  connectTo: Array<number>[];
  stars: Array<{title?: string, coordinates: [number, number]}>;
}