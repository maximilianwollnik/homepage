import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SocialComponent } from './shared/social/social.component';
import { RouterModule, Route } from '@angular/router';
import { ServiceModule } from '@frontend/service'

export const uiRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [CommonModule, FontAwesomeModule, RouterModule, ServiceModule],
  declarations: [
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    SocialComponent
  ],
  exports: [
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    SocialComponent
  ],
})
export class UiModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
