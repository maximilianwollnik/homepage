import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Work } from '@frontend/data';
import { EnvironmentLoaderService } from '../../index';

@Injectable({
  providedIn: 'root',
})
export class WorkLoaderService {
  constructor(
    private http: HttpClient,
    private environmentLoaderService: EnvironmentLoaderService
  ) {}

  getWork(): Observable<Work[]> {
    return this.http.get<Work[]>(
      this.environmentLoaderService.getApiHost() + 'api/work'
    );
  }
}
