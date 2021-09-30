import { Component, OnInit, VERSION } from '@angular/core';
import { Colours } from './models/colours.enum';
import { Cookie } from './models/cookie';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //default cookies created
  chocChips = 0;
  selectCookie: Cookie;
  cookieList: Cookie[] = [
    // declared and initialized from  parent app.
    {
      name: 'Marshmallow',
      colour: Colours.BROWN, chocchipNum: 0
    },

    {
      name: 'Rockyroad',
      colour: Colours.BROWN, chocchipNum: 0
    },
  ];
  
  //CREATING A NEW COOKIE
  newCookiename: string; 

  //CHANGE COLOURS
  selectColor: Colours;
  colorList: Colours[] = [Colours.BLACK,Colours.BLUE, Colours.BROWN, Colours.PINK, Colours.WHITE];
  

  ngOnInit() {
    this.selectCookie = this.cookieList[0];
    this.selectColor = this.selectCookie.colour;
  }

  //function to CREATE NEW COOKIE
  addCookie(newCookiename: string) {
    let c = new Cookie(newCookiename);
    this.cookieList.push(c);
  
  }
  onColourChange(newColour) {
    this.selectCookie.colour = newColour;
   }

  onCookieChange(newCookie) {
    this.selectCookie = newCookie;
    this.selectColor = this.selectCookie.colour;
   }

  addChocolateChip() {
    this.selectCookie.chocchipNum += this.chocChips;
  }

}
