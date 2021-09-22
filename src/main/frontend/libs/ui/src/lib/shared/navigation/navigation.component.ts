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
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

}
