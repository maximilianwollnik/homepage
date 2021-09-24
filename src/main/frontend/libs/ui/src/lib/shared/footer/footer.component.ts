import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Info } from '@frontend/data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'frontend-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  version = '';
  time = '';

  constructor(private translate: TranslateService, private http: HttpClient) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('de');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('de');

    http
      .get<Info>('http://localhost:1234/actuator/info')
      .subscribe((info: Info) => {
        this.time = info.build.time;
        this.version = info.build.version;
      });
  }
}
