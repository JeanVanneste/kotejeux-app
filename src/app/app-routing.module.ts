import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditeursComponent } from './editeurs/editeurs.component';

const routes: Routes = [
  { path: 'editeurs', component: EditeursComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
