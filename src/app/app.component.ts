import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppChildComponent } from './app-child/app-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'binding-component';

  parentName: string = "Cha";

  chatMessage() {
    console.log("Hello " + this.parentName);
  }

  constructor() {}
}
