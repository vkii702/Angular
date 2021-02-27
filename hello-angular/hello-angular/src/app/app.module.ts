import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { IframeComponent } from './component/iframe/iframe.component';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './component/register-form/register-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    IframeComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:LoginFormComponent},
      {path:'Register',component:RegisterFormComponent},
      {path:'iframe',component:IframeComponent}
    ]),

  
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
