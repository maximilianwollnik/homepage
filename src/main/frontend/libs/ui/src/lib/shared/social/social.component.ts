import { Component, OnInit } from '@angular/core';
import { SocialItem } from '@frontend/data'
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'frontend-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  socialItems : SocialItem[] = [];

  constructor(faConfig: FaConfig) {
    faConfig.defaultPrefix = 'fab';
    this.socialItems.push({name: "xing", url: "https://www.xing.com/profile/Maximilian_Wollnik2?sc_o=mxb_p"});
    this.socialItems.push({name: "facebook", url: "https://www.facebook.com/maximilian.wollnik.3"});
  }

  ngOnInit(): void {
  }

}
