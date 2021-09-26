import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cookie } from '../../models/cookie';
import { Colours } from '../../models/colours.enum';

@Component({
  selector: 'app-createcookies',
  templateUrl: './createcookies.component.html',
  styleUrls: ['./createcookies.component.css']
})
export class CreatecookiesComponent implements OnInit {

  //CREATE NEW COOKIE CHILD LEVEL, 
  //@OUTPUT linked in with EventEmitter(same as EventListener)
  // cookie has a default colour when its created so only required new name.

   @Output() newItemEvent = new EventEmitter<any>(); 
   // By using any above, can then use any datatype
    addNewCookie(value: string) {
    this.newItemEvent.emit(value);
  }

  @Input() selectedCookie: any
  constructor() { }

  ngOnInit() {
    //this.newItemEvent.emit("hello")
    
  }

}