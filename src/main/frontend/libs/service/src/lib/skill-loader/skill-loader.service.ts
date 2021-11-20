import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '@frontend/data';
import { EnvironmentLoaderService } from '../../index';

@Injectable({
  providedIn: 'root',
})
export class SkillLoaderService {
  constructor(
    private http: HttpClient,
    private environmentLoaderService: EnvironmentLoaderService
  ) {}

  getSkills(): Observable<Item[]> {
    return this.http.get<Item[]>(
      this.environmentLoaderService.getApiHost() + 'api/skill'
    );
  }
}
