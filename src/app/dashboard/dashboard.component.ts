import { Component, OnInit } from '@angular/core';

import { Editeur } from '../editeur';
import { EditeurService } from '../editeur.service';
import { Jeu } from '../jeu';
import { JeuService } from '../jeu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  editeurs: Editeur[] = [];
  jeux: Jeu[] = []

  constructor(
    private editeurService: EditeurService,
    private jeuService: JeuService
  ) { }

  ngOnInit() {
    this.getEditeurs();
    this.getJeux();
  }

  getEditeurs(): void {
    this.editeurService.getEditeurs()
        .subscribe(editeurs => this.editeurs = editeurs.slice(1, 5));
  }

  getJeux(): void {
    this.jeuService.getJeux()
        .subscribe(jeux => this.jeux = jeux.slice(1,5));
  }

}
