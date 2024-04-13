import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { AnimalComponent } from './app/animal/animal.component';

const bootstrap = () => bootstrapApplication(AnimalComponent, config);

export default bootstrap;
