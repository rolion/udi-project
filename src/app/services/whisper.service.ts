import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WhisperService {
  private apiUrl = environment.azureWhisperBackendUrl;

  constructor(private http: HttpClient) {}

  transcribeAudio(audioFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('audio', audioFile);

    return this.http.post(this.apiUrl, formData);
  }
}
