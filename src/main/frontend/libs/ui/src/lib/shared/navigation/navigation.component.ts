import { Component } from '@angular/core';
import { TranslationConfigurationService } from '@frontend/service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'frontend-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(
    private translate: TranslateService,
    private translateConfiguration: TranslationConfigurationService,
    private router: Router
  ) {
    this.translateConfiguration.configureTranslation(this.translate);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  isLinkActive(link: string) {
    return this.router.url.includes(link) || (this.router.url.indexOf('#') === -1 && link === 'home#top')
  }
}
