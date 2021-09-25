import { Component } from '@angular/core';
import { BiographyLoaderService, TranslationConfigurationService } from '@frontend/service';
import { TranslateService } from '@ngx-translate/core';
import { Biography, BiographyState } from '@frontend/data';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'frontend-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  cv: Biography[] = [];
  faCheckSquare = faCheckSquare;
  faEdit = faEdit;
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
