import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Colours } from './models/colours.enum';
import { Cookie } from './models/cookie';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreatecookiesComponent } from './Components/createcookies/createcookies.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CreatecookiesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
