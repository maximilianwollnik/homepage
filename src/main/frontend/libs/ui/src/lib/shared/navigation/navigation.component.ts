import { Component } from '@angular/core';
import { TranslationConfigurationService } from '@frontend/service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'frontend-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  public isCollapsed = true;

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
    return (
      this.router.url.includes(link) ||
      (this.router.url.indexOf('#') === -1 && link === 'home#top')
    );
  }

  navigate(link: string, fragment: string) {
    this.router.navigateByUrl(link);
    let sleep = timer(500);
    if (this.router.url.indexOf(link) > -1) {
      sleep = timer(0);
    }
    sleep.subscribe(() =>
      this.router.navigateByUrl(link + '#' + fragment)
    );
  }
}
