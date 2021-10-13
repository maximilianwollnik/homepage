import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biography } from '@frontend/data';
import { EnvironmentLoaderService } from '../../index';

@Injectable({
  providedIn: 'root',
})
export class BiographyLoaderService {
  constructor(
    private http: HttpClient,
    private environmentLoaderService: EnvironmentLoaderService
  ) {}

  getBiography(): Observable<Biography[]> {
    return this.http.get<Biography[]>(
      this.environmentLoaderService.getApiHost() + 'api/biography'
    );
  }

  getEducation(): Observable<Biography[]> {
    return this.http.get<Biography[]>(
      this.environmentLoaderService.getApiHost() + 'api/education'
    );
  }
}
