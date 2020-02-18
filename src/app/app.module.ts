import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpTestingController} from '@angular/common/http/testing'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    //HttpTestingController
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
