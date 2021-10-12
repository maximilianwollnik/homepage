import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '@frontend/data';

@Injectable({
  providedIn: 'root'
})
export class SkillLoaderService {

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Item[]> {
    return this.http.get<Item[]>("http://localhost:1234/api/skill");
  }
}
