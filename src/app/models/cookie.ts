import { Colours } from './colours.enum';

export class Cookie {
  name: string;
  colour: Colours;
  chocchipNum: number;

  constructor(_name: string) {
    this.name = _name;
    this.colour = Colours.BROWN;
    this.chocchipNum = 0;

  }
}