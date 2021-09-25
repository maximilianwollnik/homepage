import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biography } from '@frontend/data';

@Injectable({
  providedIn: 'root'
})
export class BiographyLoaderService {

  constructor(private http: HttpClient) { }

  getBiography(): Observable<Biography[]> {
    return this.http.get<Biography[]>("http://localhost:1234/api/biography");
  }
}
