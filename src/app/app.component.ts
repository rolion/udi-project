import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { QnaComponent } from './qna/qna.component';
import { Project1Component } from "./project-1/project-1.component";
import { AudioTranscriberComponent } from './audio-transcriber/audio-transcriber.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QnaComponent, Project1Component, AudioTranscriberComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'udi-ia-project';
}
