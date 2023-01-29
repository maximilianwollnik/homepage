export * from './lib/service.module'
export * from './lib/translation-loader/translation-loader.service';
export * from './lib/translation-configuration/translation-configuration.service';
export * from './lib/biography-loader/biography-loader.service';
export * from './lib/social-loader/social-loader.service';
export * from './lib/work-loader/work-loader.service';
export * from './lib/skill-loader/skill-loader.service';
export * from './lib/environment-loader/environment-loader.service';

import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken('Application config');