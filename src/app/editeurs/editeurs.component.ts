import { Component, OnInit } from '@angular/core';

import { Editeur } from '../editeur';
import { EditeurService } from '../editeur.service'

@Component({
  selector: 'app-editeurs',
  templateUrl: './editeurs.component.html',
  styleUrls: ['./editeurs.component.css']
})
export class EditeursComponent implements OnInit {

  editeurs: Editeur[];

  getEditeurs(): void {
    this.editeurService.getEditeurs()
        .subscribe(editeurs => this.editeurs = editeurs);
  }
  selectedEditeur: Editeur;
  onSelect(editeur: Editeur): void {
    this.selectedEditeur = editeur;
  }

  constructor(private editeurService: EditeurService) { }

  ngOnInit() {
    this.getEditeurs();
  }

}
