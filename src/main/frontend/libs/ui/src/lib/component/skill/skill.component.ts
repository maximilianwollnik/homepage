import { Component } from '@angular/core';
import { Skill } from '@frontend/data';
import {
  SkillLoaderService,
  TranslationConfigurationService,
} from '@frontend/service';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'frontend-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  customOptions: OwlOptions = {
    items: 4,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    autoWidth: true,
  };
  skills: Skill[] = [];

  constructor(
    private translate: TranslateService,
    private translateConfiguration: TranslationConfigurationService,
    private skillLoaderService: SkillLoaderService
  ) {
    this.translateConfiguration.configureTranslation(this.translate);

    this.skillLoaderService.getSkills().subscribe((skill: Skill[]) => {
      this.skills = skill;
    });
  }
}
