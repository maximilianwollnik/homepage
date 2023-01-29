import { Component } from '@angular/core';
import { BiographyLoaderService } from '@frontend/service';
import { Biography, BiographyState } from '@frontend/data';
import  * as faSolid from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'frontend-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  cv: Biography[] = [];
  faCheckSquare = faSolid.faCheckSquare;
  faEdit = faSolid.faEdit;
  allBiographyStates = BiographyState;

  constructor(
    private biographyLoaderService: BiographyLoaderService
  ) {
    this.biographyLoaderService.getBiography().subscribe((biography: Biography[]) => {
      this.cv = biography;
    })
  }
}
