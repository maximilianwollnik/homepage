import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SocialComponent } from './shared/social/social.component';
import { RouterModule, Route } from '@angular/router';
import { ServiceModule } from '@frontend/service';
import { HttpClientModule } from '@angular/common/http';
import { CvComponent } from './component/cv/cv.component';
import { WorkComponent } from './component/work/work.component';
import { DisclaimerComponent } from './component/disclaimer/disclaimer.component';
import { SkillComponent } from './component/skill/skill.component';
import { EducationComponent } from './component/education/education.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MzdTimelineModule } from 'ngx-mzd-timeline';

export const uiRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: CvComponent, outlet: 'cv' },
      { path: '', component: WorkComponent, outlet: 'work' },
      { path: '', component: SkillComponent, outlet: 'skill' },
      { path: '', component: EducationComponent, outlet: 'education' },
    ],
  },
  { path: 'disclaimer', component: DisclaimerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ServiceModule,
    HttpClientModule,
    MzdTimelineModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule,
    CarouselModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    SocialComponent,
    CvComponent,
    DisclaimerComponent,
    WorkComponent,
    SkillComponent,
    EducationComponent,
  ],
  exports: [
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    SocialComponent,
    CvComponent,
    DisclaimerComponent,
    WorkComponent,
    SkillComponent,
    EducationComponent,
  ],
})
export class UiModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
