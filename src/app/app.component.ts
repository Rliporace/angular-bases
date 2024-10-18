import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
  public counter: number= 10;

  // increaseBy(value: number):void {
  //   this.counter = this.counter + 1 ;
  // }
  // decreaseBy():void {
  //   this.counter = this.counter - 1;
  // }

  //otra forma de hacerlo mas facil

  increaseBy(value: number):void {
       this.counter += value ;
     }

     decreaseBy(value:number):void {
      this.counter = value;
     }



}
