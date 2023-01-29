import { APP_CONFIG } from '../../index';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class EnvironmentLoaderService {
  constructor(@Inject(APP_CONFIG) private appConfig: any) {}

  getApiHost(): string {
    return this.appConfig.apiHost;
  }
}
