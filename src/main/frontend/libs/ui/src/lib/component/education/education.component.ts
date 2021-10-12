import { Component } from '@angular/core';
import { Biography } from '@frontend/data';
import { BiographyLoaderService } from '@frontend/service';

@Component({
  selector: 'frontend-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education: Biography[] = [];

  constructor(
    private biographyLoaderService: BiographyLoaderService
  ) {
    this.biographyLoaderService.getEducation().subscribe((education: Biography[]) => {
      this.education = education;
    })
  }
}
