import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleWebsiteComponent } from './sample-website/sample-website.component';
import { DailyCodesComponent } from './daily-codes/daily-codes.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleWebsiteComponent,
    DailyCodesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
