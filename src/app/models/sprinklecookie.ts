import { Colours } from './colours.enum';
import { Cookie } from './cookie';

export class SprinkleCookie extends Cookie 
{
  sprinkleColour: Colours;

  constructor(_name: string) 
  {
    super(_name);
    this.name = _name;
    this.colour = Colours.BROWN;
    //this.chocchipNum = 0;
    this.sprinkleColour = Colours.BLUE;

 }
}