import { Component } from '@angular/core';
import { QnaComponent } from "../qna/qna.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-1',
  standalone: true,
  imports: [QnaComponent, CommonModule],
  templateUrl: './project-1.component.html',
  styleUrl: './project-1.component.css'
})
export class Project1Component {

  questions = ['What is a cell?', 'How small is a cell?', 'What does the cell nucleus contain?', 'what is cell division?'];

}
