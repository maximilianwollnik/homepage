import { Component } from '@angular/core';
import { TranslationConfigurationService } from '@frontend/service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'frontend-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private translate: TranslateService,
    private translateConfiguration: TranslationConfigurationService
  ) {
    translateConfiguration.configureTranslation(translate);
  }
}
