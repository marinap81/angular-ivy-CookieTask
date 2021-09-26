 import { Component, OnInit, VERSION } from '@angular/core';
import { Colours } from './models/colours.enum';
import { Cookie } from './models/cookie';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
 
  //default cookies created
  selectCookie: Cookie;
  cookieList: Cookie[] = [ // declared and initialized from  parent app.
    {
      name: 'Marshmallow', colour: Colours.BROWN
    },

    {
      name: 'Rockyroad', colour: Colours.BROWN
    }
  ];

  
  //CREATING A NEW COOKIE
  //newCookie: string;
  //newCookieColour: Colours;


  ngOnInit() {
    this.selectCookie = this.cookieList[0];
  }
    //function to CREATE NEW COOKIE 
    addCookie(newCookie: Cookie) 
    {this.cookieList.push(newCookie);}
  
}
