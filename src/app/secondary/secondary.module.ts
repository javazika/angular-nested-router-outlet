import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryComponent } from './secondary.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'module1',
    pathMatch: 'full'
  },
  {
    path: 'module1',
    component: SecondaryComponent,
    loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module)
  },
  {
    path: 'module2',
    component: SecondaryComponent,
    loadChildren: () => import('./module2/module2.module').then(m => m.Module2Module)
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [SecondaryComponent]
})
export class SecondaryModule { }
