import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '@frontend/data';

@Injectable({
  providedIn: 'root'
})
export class SkillLoaderService {

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>("http://localhost:1234/api/skill");
  }
}
