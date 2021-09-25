import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Info } from '@frontend/data';
import { TranslationConfigurationService } from '@frontend/service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'frontend-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  version = '';
  time = '';

  constructor(
    private translate: TranslateService,
    private translateConfiguration: TranslationConfigurationService,
    private http: HttpClient
  ) {
    translateConfiguration.configureTranslation(translate);

    http
      .get<Info>('http://localhost:1234/actuator/info')
      .subscribe((info: Info) => {
        this.time = info.build.time;
        this.version = info.build.version;
      });
  }
}
