import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class WebDataService {

  private baseUrl = 'http://localhost:3000'; // Adjust the base URL as needed

  constructor(private http: HttpClient) {}

  getLocation(): Observable<any> {
    const url = `${this.baseUrl}/location`;
    return this.http.get(url);
  }

  getChef(): Observable<any> {
    const url = `${this.baseUrl}/chef`;
    return this.http.get(url);
  }

  getAwards(): Observable<any> {
    const url = `${this.baseUrl}/awards`;
    return this.http.get(url);
  }

  getAmbiance(): Observable<any> {
    const url = `${this.baseUrl}/ambiance`;
    return this.http.get(url);
  }

  getSustainability(): Observable<any> {
    const url = `${this.baseUrl}/sustainability`;
    return this.http.get(url);
  }

  getEvents(): Observable<any> {
    const url = `${this.baseUrl}/events`;
    return this.http.get(url);
  }

  getOnlinePresence(): Observable<any> {
    const url = `${this.baseUrl}/online_presence`;
    return this.http.get(url);
  }

  getReviews(): Observable<any> {
    const url = `${this.baseUrl}/reviews`;
    return this.http.get(url);
  }

  getMenuCategories(): Observable<any> {
    const url = `${this.baseUrl}/categories`;
    return this.http.get(url);
  }

  getSeasonalMenu(): Observable<any> {
    const url = `${this.baseUrl}/seasonal_menu`;
    return this.http.get(url);
  }
}
