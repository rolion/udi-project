import { Component } from '@angular/core';
import { WhisperService } from '../services/whisper.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-transcriber',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-transcriber.component.html',
  styleUrl: './audio-transcriber.component.css'
})
export class AudioTranscriberComponent {
  transcribedText: string = '';
  isLoading: boolean = false;

  constructor(private whisperService: WhisperService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.isLoading = true;
      this.whisperService.transcribeAudio(file).subscribe(
        {next:(response) => {
          this.transcribedText = response.text;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error al transcribir:', error);
          this.isLoading = false;
        }}
      );
    }
  }
}
