import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    component:TodoComponent,
    path:'todo'
  },
  {
    component:LandingPageComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
