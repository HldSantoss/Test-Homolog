import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { Articles } from './models/articles.models';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<Articles[]>(`${environment.apiUrl}/Articles`);
  }
}
