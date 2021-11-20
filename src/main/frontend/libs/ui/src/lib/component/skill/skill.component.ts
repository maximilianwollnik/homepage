import { Component } from '@angular/core';
import { Item } from '@frontend/data';
import {
  SkillLoaderService,
} from '@frontend/service';
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
  skills: Item[] = [];

  constructor(
    private skillLoaderService: SkillLoaderService
  ) {
    this.skillLoaderService.getSkills().subscribe((skill: Item[]) => {
      this.skills = skill;
    });
  }
}
