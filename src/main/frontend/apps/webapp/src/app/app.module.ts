import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { uiRoutes, UiModule } from '@frontend/ui';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(uiRoutes, {
      initialNavigation: 'enabled',
      anchorScrolling: 'enabled'
    }),
    UiModule,
    NgwWowModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
