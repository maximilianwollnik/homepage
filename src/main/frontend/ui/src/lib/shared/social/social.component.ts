import { Component } from '@angular/core';
import { Social } from '@frontend/data';
import { SocialLoaderService } from '@frontend/service';

@Component({
  selector: 'frontend-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  socialItems : Social[] = [];

  constructor(private socialLoaderService : SocialLoaderService) {
    socialLoaderService.getSocial().subscribe((social: Social[]) => {
      this.socialItems = social;
    })
  }
}
