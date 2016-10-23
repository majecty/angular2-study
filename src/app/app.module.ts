import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
        AlertModule,
        AccordionModule,
        DropdownModule
    } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock.component';
import { HerosCompoent } from './heros.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    HerosCompoent
  ],
  imports: [
    AlertModule,
    AccordionModule,
    DropdownModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, ClockComponent, HerosCompoent]
})
export class AppModule { }
