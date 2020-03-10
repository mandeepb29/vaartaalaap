import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'videos',
    loadChildren: './all-videos/all-videos.module#AllVideosModule'
  },
  {
    path:'policy',
    loadChildren: './policy/policy.module#PolicyModule'
  },
  {
    path:'terms-and-conditions',
    loadChildren: './terms-and-conditions/terms-and-conditions.module#TermsAndConditionsModule'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
