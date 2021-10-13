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
import { EnvironmentLoaderService } from './environment-loader/environment-loader.service';

export function createTranslateLoader(http: HttpClient, environmentLoaderService: EnvironmentLoaderService) {
  return new TranslationLoaderService(http, environmentLoaderService);
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
        deps: [HttpClient, EnvironmentLoaderService],
      },
      defaultLanguage: 'de',
    }),
  ],
  providers: [TranslateStore, EnvironmentLoaderService],
  exports: [CommonModule, TranslateModule],
})
export class ServiceModule {}
