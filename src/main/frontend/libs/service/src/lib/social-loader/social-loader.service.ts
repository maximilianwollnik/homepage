import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Social } from '@frontend/data';

@Injectable({
  providedIn: 'root'
})
export class SocialLoaderService {

  constructor(private http: HttpClient) { }

  getSocial(): Observable<Social[]> {
    return this.http.get<Social[]>("http://localhost:1234/api/social");
  }
}
