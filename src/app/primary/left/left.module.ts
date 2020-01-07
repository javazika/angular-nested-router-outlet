import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './left.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // component: LeftComponent,
    redirectTo: 'child1',
    pathMatch: 'full'
  },
  {
    path: 'child1',
    component: LeftComponent,
    loadChildren: () => import('./child1/child1.module').then(m => m.Child1Module)
  },
  {
    path: 'child2',
    component: LeftComponent,
    loadChildren: () => import('./child2/child2.module').then(m => m.Child2Module)
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [LeftComponent]
})
export class LeftModule { }
