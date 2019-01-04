import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Editeur } from '../editeur';
import { EditeurService } from '../editeur.service';

@Component({
  selector: 'app-editeur-detail',
  templateUrl: './editeur-detail.component.html',
  styleUrls: ['./editeur-detail.component.css']
})
export class EditeurDetailComponent implements OnInit {

  @Input() editeur: Editeur;
  constructor(
    private route: ActivatedRoute,
    private editeurService: EditeurService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEditeur();
  }

  getEditeur(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.editeurService.getEditeur(id)
        .subscribe(editeur => this.editeur = editeur);
  }

}
