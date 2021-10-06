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
import { TestComponent } from './component/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { CvComponent } from './component/cv/cv.component';
import { MzdTimelineModule } from 'ngx-mzd-timeline';
import { DisclaimerComponent } from './component/disclaimer/disclaimer.component';
import { WorkComponent } from './component/work/work.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const uiRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'work', component: WorkComponent },
  { path: 'test', component: TestComponent },
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
    LightboxModule
  ],
  declarations: [
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    SocialComponent,
    TestComponent,
    CvComponent,
    DisclaimerComponent,
    WorkComponent,
  ],
  exports: [
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    SocialComponent,
    TestComponent,
    CvComponent,
    DisclaimerComponent,
    WorkComponent,
  ],
})
export class UiModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
