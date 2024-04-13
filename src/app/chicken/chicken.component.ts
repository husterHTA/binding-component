import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chicken',
  standalone: true,
  imports: [],
  templateUrl: './chicken.component.html',
  styleUrl: './chicken.component.scss'
})
export class ChickenComponent {
  sound: string = 'cục ta cục tác';

  constructor() {
    
  }

  @Output() soundEvent = new EventEmitter<string>();

  chickenSound() {
    this.soundEvent.emit(this.sound);
  }
}
