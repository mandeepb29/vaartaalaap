import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyComponent } from './policy.component';
import { RouterModule,Route } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: PolicyComponent
    }
  ]


@NgModule({
  declarations: [PolicyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class PolicyModule { }
