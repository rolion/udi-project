import { Routes } from '@angular/router';
import { Project1Component } from './project-1/project-1.component';
import { AudioTranscriberComponent } from './audio-transcriber/audio-transcriber.component';

export const routes: Routes = [
  {path: 'project-1', component: Project1Component},
  {path: 'project-2', component: AudioTranscriberComponent},
];
