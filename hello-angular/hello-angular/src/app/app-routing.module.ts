import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IframeComponent } from './component/iframe/iframe.component';
import { LoginFormComponent } from './component/login-form/login-form.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
