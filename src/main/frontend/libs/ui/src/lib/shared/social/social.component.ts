import { Component } from '@angular/core';
import { SocialItem } from '@frontend/data';
import { SocialLoaderService } from '@frontend/service';

@Component({
  selector: 'frontend-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  socialItems : SocialItem[] = [];

  constructor(private socialLoaderService : SocialLoaderService) {
    socialLoaderService.getSocial().subscribe((social: SocialItem[]) => {
      this.socialItems = social;
    })
  }
}
