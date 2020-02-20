import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpTestingController} from '@angular/common/http/testing'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserServiceService } from './user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    //HttpTestingController
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
