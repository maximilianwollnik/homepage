import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Social } from '@frontend/data';
import { EnvironmentLoaderService } from '../../index';

@Injectable({
  providedIn: 'root',
})
export class SocialLoaderService {
  constructor(
    private http: HttpClient,
    private environmentLoaderService: EnvironmentLoaderService
  ) {}

  getSocial(): Observable<Social[]> {
    return this.http.get<Social[]>(
      this.environmentLoaderService.getApiHost() + 'api/social'
    );
  }
}
