import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Work } from '@frontend/data';

@Injectable({
  providedIn: 'root'
})
export class WorkLoaderService {

  constructor(private http: HttpClient) { }

  getWork(): Observable<Work[]> {
    return this.http.get<Work[]>("http://localhost:1234/api/work");
  }
}
