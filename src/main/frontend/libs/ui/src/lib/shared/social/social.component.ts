import { Component, OnInit } from '@angular/core';
import { SocialItem } from '@frontend/data'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXing } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'frontend-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  socialItems : SocialItem[] = [];

  constructor() {
    this.socialItems.push({icon: faXing, url: "https://www.xing.com/profile/Maximilian_Wollnik2?sc_o=mxb_p"});
    this.socialItems.push({icon: faFacebook, url: "https://www.facebook.com/maximilian.wollnik.3"});
    this.socialItems.push({icon: faGithub, url: "https://github.com/maximilianwollnik"});
    this.socialItems.push({icon: faStackOverflow, url: "http://stackoverflow.com/users/5158269/maximilian-wollnik"});
    this.socialItems.push({icon: faLinkedin, url: "https://de.linkedin.com/pub/maximilian-wollnik/107/669/b20"});
    this.socialItems.push({icon: faTwitter, url: "https://twitter.com/MaxWollnik"});
  }

  ngOnInit(): void {
  }
}
