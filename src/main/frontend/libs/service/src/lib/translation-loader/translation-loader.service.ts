import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationLoaderService implements TranslateLoader {

  constructor(private http: HttpClient) { }

  getTranslation(lang: string): Observable<unknown> {
    return this.http.get("http://localhost:1234/api/translation/" + lang);
  }
}
