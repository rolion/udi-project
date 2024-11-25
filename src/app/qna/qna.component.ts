import { Component, Input } from '@angular/core';
import { AzureLanguageService } from '../services/azure-language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qna',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './qna.component.html',
  styleUrl: './qna.component.css'
})
export class QnaComponent {

  showResponse = false
  shortReponse  = ''
  longResponse = ''
  @Input() question: string = ''

  constructor(private qnaServer: AzureLanguageService) { }
  getResponse(){
      this.qnaServer.getAnswer(this.question)
      .subscribe({
        next: (response: any) => {
          if (response.answers && response.answers.length > 0) {
            this.shortReponse = response.answers[0].answer;
            this.longResponse = response.answers[1].answer;
            this.showResponse = true;
          }
        },
        error: (error) => {
          console.error('Error fetching answer:', error);
        }
      })
  }
}
