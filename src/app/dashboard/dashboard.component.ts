import { Component, OnInit } from '@angular/core';

import { Editeur } from '../editeur';
import { EditeurService } from '../editeur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  editeurs: Editeur[] = [];

  constructor(private editeurService: EditeurService) { }

  ngOnInit() {
    this.getEditeurs();
  }

  getEditeurs(): void {
    this.editeurService.getEditeurs()
        .subscribe(editeurs => this.editeurs = editeurs.slice(1, 5));
  }

}
