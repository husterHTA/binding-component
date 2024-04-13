import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pig',
  standalone: true,
  imports: [],
  templateUrl: './pig.component.html',
  styleUrl: './pig.component.scss'
})
export class PigComponent {
  sound: string = 'ụt à ụt ịt';

  constructor() {
    
  }

  @Output() soundEvent = new EventEmitter<string>();

  pigSound() {
    this.soundEvent.emit(this.sound);
  }
}
