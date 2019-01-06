import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditeursComponent } from './editeurs/editeurs.component';
import { JeuxComponent } from './jeux/jeux.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditeurDetailComponent } from './editeur-detail/editeur-detail.component';
import { JeuDetailComponent } from './jeu-detail/jeu-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch:'full' },
  { path: 'editeurs', component: EditeursComponent },
  { path: 'jeux', component: JeuxComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'editeur/detail/:id', component: EditeurDetailComponent },
  { path: 'jeu/detail/:id', component: JeuDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
