import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { uiRoutes, UiModule } from '@frontend/ui'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(uiRoutes, { initialNavigation: 'enabled' }), UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
