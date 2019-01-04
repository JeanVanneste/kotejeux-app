import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditeursComponent } from './editeurs/editeurs.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch:'full' },
  { path: 'editeurs', component: EditeursComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
