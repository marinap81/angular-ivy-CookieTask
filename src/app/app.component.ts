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
  }

  //function to CREATE NEW COOKIE
  addCookie(newCookiename: string) {
    let c = new Cookie(newCookiename);
    this.cookieList.push(c);
  }
}
