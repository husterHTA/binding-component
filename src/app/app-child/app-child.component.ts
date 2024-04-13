import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './app-child.component.html',
  styleUrl: './app-child.component.scss'
})
export class AppChildComponent {
  @Input() childName: string = '';

  constructor() {}
}
