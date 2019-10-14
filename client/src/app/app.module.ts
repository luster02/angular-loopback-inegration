import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompleteComponent } from './components/complete/complete.component';
import { IncompleteComponent } from './components/incomplete/incomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { AllComponent } from './components/all/all.component'

@NgModule({
  declarations: [
    AppComponent,
    CompleteComponent,
    IncompleteComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
