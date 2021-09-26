import { Component } from '@angular/core';
import { BiographyLoaderService, TranslationConfigurationService } from '@frontend/service';
import { TranslateService } from '@ngx-translate/core';
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
    private translate: TranslateService,
    private translateConfiguration: TranslationConfigurationService,
    private biographyLoaderService: BiographyLoaderService
  ) {
    translateConfiguration.configureTranslation(translate);
 
    biographyLoaderService.getBiography().subscribe((biography: Biography[]) => {
      this.cv = biography;
    })
  }
}
