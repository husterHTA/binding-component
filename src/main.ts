import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AnimalComponent } from './app/animal/animal.component';

bootstrapApplication(AnimalComponent, appConfig)
  .catch((err) => console.error(err));
