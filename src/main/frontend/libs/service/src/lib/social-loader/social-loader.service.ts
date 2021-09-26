import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocialItem } from '@frontend/data';

@Injectable({
  providedIn: 'root'
})
export class SocialLoaderService {

  constructor(private http: HttpClient) { }

  getSocial(): Observable<SocialItem[]> {
    return this.http.get<SocialItem[]>("http://localhost:1234/api/social");
  }
}
