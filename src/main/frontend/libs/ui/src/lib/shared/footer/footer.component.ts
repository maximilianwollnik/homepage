import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Info } from '@frontend/data';

@Component({
  selector: 'frontend-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  version = '';
  time = '';

  constructor(
    private http: HttpClient
  ) {
    http
      .get<Info>('http://localhost:1234/actuator/info')
      .subscribe((info: Info) => {
        this.time = info.build.time;
        this.version = info.build.version;
      });
  }
}
