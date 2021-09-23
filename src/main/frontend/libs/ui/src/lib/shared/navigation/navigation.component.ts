import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'frontend-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  translate : TranslateService;

  constructor(translate: TranslateService) { 
    this.translate = translate;

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('de');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('de');
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
