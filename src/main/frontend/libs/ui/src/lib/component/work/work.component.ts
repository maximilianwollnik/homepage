import { Component } from '@angular/core';
import { Work } from '@frontend/data';
import {
  WorkLoaderService,
} from '@frontend/service';
import { Gallery } from 'ng-gallery';

@Component({
  selector: 'frontend-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  workItems: Work[][] = [];

  constructor(
    private workLoaderService: WorkLoaderService,
    private gallery: Gallery
  ) {
    this.workLoaderService.getWork().subscribe((work: Work[]) => {
      const lightboxRef = this.gallery.ref('lightbox', {
        thumb: false,
      });

      let workArray: Work[] = [];
      let j = 0;
      for (let i = 0; i < work.length; i++) {
        work[i].id = i
        if (j !== 2) {
          workArray.push(work[i]);
        } else {
          this.workItems.push(workArray);
          workArray = [];
          j = 0;
          workArray.push(work[i]);
        }
        j++;
        lightboxRef.addYoutube({ src: work[i].url });
      }
      if (workArray.length > 0) {
        this.workItems.push(workArray);
      }
    });
  }
}
