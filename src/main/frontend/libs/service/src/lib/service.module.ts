import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslationLoaderService } from './translation-loader/translation-loader.service';
import {
  TranslateLoader,
  TranslateModule,
  TranslateStore,
} from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

export function createTranslateLoader(http: HttpClient) {
  return new TranslationLoaderService(http);
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'de',
    }),
  ],
  providers: [TranslateStore],
  exports: [CommonModule, TranslateModule],
})
export class ServiceModule {}
