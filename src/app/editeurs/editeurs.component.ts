import { Component, OnInit } from '@angular/core';

import { Editeur } from '../editeur';
import { EDITORS } from '../editeurs-test';

@Component({
  selector: 'app-editeurs',
  templateUrl: './editeurs.component.html',
  styleUrls: ['./editeurs.component.css']
})
export class EditeursComponent implements OnInit {

  editeur: Editeur = {
    id: 4,
    name: 'Lui-même',
    nationalite: 'France',
    creationYear: 1999
  }

  editeurs = EDITORS;

  selectedEditeur: Editeur;
  onSelect(editeur: Editeur): void {
    this.selectedEditeur = editeur;
  }

  constructor() { }

  ngOnInit() {
  }

}
