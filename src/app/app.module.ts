import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterComponent } from './counter/components/counter.component';
import { HeroComponent } from './Heroes/hero/hero.component';
import { ListComponent } from './Heroes/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    counterComponent,
    HeroComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
