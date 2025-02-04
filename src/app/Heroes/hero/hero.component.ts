import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public name: string = 'Ironman';
  public age: number = 25;

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'laura';
  }
  changeAge(): void {
    this.age = 10;
  }
  resetForm(): void {
    //this.name = 'superman';
    this.age = 25;

  //   document.querySelectorAll('h1')!.forEach(element => {
  //     element.innerHTML = '<h1>Desde Angular</h1>';
  //   })
  }
}
