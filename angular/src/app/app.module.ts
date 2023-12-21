import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewContentModule } from './view-content/view-content.module';
import { DirectivesModule } from './directives/directives.module';
import { DynamicComponentsModule } from './dynamic-components/dynamic-components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewContentModule,
    DirectivesModule,
    DynamicComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
