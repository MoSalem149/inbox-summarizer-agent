import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SummaryResponse {
  summary: string;
  bullets: string[];
  actionItems: string[];
  deadlines: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  private apiUrl = 'http://localhost:3000/api/summarize';

  constructor(private http: HttpClient) {}

  summarize(email: string): Observable<SummaryResponse> {
    return this.http.post<SummaryResponse>(this.apiUrl, { email });
  }
}
