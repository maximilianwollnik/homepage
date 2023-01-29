import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { uiRoutes, UiModule } from '@frontend/ui';
import { NgwWowModule } from 'ngx-wow';
import { APP_CONFIG } from '@frontend/service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(uiRoutes, {
      initialNavigation: 'enabledBlocking',
      anchorScrolling: 'enabled',
      useHash: true
    }),
    UiModule ,
    NgwWowModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
