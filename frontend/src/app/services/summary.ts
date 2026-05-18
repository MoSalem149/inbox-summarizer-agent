import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface SummaryResponse {
  summary: string;
  bullets: string[];
  actionItems: string[];
  deadlines: string[];
}

@Injectable({
  providedIn: "root",
})
export class SummaryService {
  private apiUrl = `${environment.apiUrl}/summarize`;

  constructor(private http: HttpClient) {}

  summarize(email: string): Observable<SummaryResponse> {
    return this.http.post<SummaryResponse>(this.apiUrl, { email });
  }
}
