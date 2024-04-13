import { Component } from '@angular/core';
import { ChickenComponent } from "../chicken/chicken.component";
import { PigComponent } from '../pig/pig.component';

@Component({
    selector: 'app-animal',
    standalone: true,
    templateUrl: './animal.component.html',
    styleUrl: './animal.component.scss',
    imports: [ChickenComponent, PigComponent]
})
export class AnimalComponent {
  sound: string = '???';

  constructor() {
    
  }

  animalSound($event: string) {
    this.sound = $event;
  }
}
