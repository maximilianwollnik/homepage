import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslationLoaderService } from './translation-loader/translation-loader.service';
import {
  TranslateCompiler,
  TranslateLoader,
  TranslateModule,
  TranslateStore,
} from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslationCompiler } from './translation-compiler/translation-compiler';

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
      compiler: { provide: TranslateCompiler, useClass: TranslationCompiler },
      defaultLanguage: 'de',
    }),
  ],
  providers: [TranslateStore],
  exports: [CommonModule, TranslateModule],
})
export class ServiceModule {}
