import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    console.log("ngOnInit2");
    console.log(`${this.baseUrl}/projects`);
    return this.http.get(`${this.baseUrl}/projects`);
  }

  sendContactForm(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/contact`, data);
  }
}
