import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryComponent } from './primary.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'right',
    pathMatch: 'full'
  },
  {
    path: 'right',
    component: PrimaryComponent,
    loadChildren: () => import('./right/right.module').then(m => m.RightModule)
  },
  {
    path: 'left',
    component: PrimaryComponent,
    loadChildren: () => import('./left/left.module').then(m => m.LeftModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [PrimaryComponent]
})
export class PrimaryModule { }
