import { Component } from '@angular/core';
import { Work } from '@frontend/data';
import {
  TranslationConfigurationService,
  WorkLoaderService,
} from '@frontend/service';
import { TranslateService } from '@ngx-translate/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'frontend-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  workItems: Work[][] = [];

  constructor(
    private workLoaderService: WorkLoaderService,
    private translate: TranslateService,
    private translateConfiguration: TranslationConfigurationService,
    private lightbox: Lightbox
  ) {
    translateConfiguration.configureTranslation(translate);

    workLoaderService.getWork().subscribe((work: Work[]) => {
      let workArray: Work[] = [];
      let j = 0;
      for (let i = 0; i < work.length; i++) {
        if (j !== 3) {
          workArray.push(work[i]);
        } else {
          this.workItems.push(workArray);
          workArray = [];
          j = 0;
          workArray.push(work[i]);
        }
        j++;
      }
      if (workArray.length > 0) {
        this.workItems.push(workArray);
      }
      console.log(this.workItems);
    });
  }

  open(url: string): void {
    this.lightbox.open([{ src: url, caption: '', thumb: '' }], 0);
  }
}
