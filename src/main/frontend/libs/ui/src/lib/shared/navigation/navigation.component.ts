import { Component } from '@angular/core';
import { TranslationConfigurationService } from '@frontend/service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'frontend-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(
    private translate: TranslateService,
    private translateConfiguration: TranslationConfigurationService
  ) {
    translateConfiguration.configureTranslation(translate);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
