import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AzureLanguageService {

  // private apiUrl = 'https://langserviceol.cognitiveservices.azure.com/';
  private apiUrl = environment.azureLanguageApiUrl
  private apiKey = environment.azureLanguageApiKey


  constructor(private http: HttpClient) {}

  getAnswer(question: string): Observable<any> {
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': this.apiKey,
      'Content-Type': 'application/json',
    });

    const body = {
      question: question,
      top: 3,
      confidenceScoreThreshold: 0.6,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
