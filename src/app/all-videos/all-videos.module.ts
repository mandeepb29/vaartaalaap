import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllVideosComponent } from './all-videos.component';
import { RouterModule,Route } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: AllVideosComponent
    }
  ]

@NgModule({
  declarations: [AllVideosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AllVideosModule { }
