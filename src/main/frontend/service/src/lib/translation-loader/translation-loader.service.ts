import { Injectable } from '@angular/core';
import { TranslateLoader } from 'node_modules/@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentLoaderService } from '../environment-loader/environment-loader.service';

@Injectable({
  providedIn: 'root',
})
export class TranslationLoaderService implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private environmentLoaderService: EnvironmentLoaderService
  ) {}

  getTranslation(lang: string): Observable<unknown> {
    return this.http.get(
      this.environmentLoaderService.getApiHost() + 'api/translation/' + lang
    );
  }
}
