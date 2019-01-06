import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Jeu } from '../jeu';
import { JeuService } from '../jeu.service';
import { Editeur } from '../editeur';
import { EditeurService } from '../editeur.service';

@Component({
  selector: 'app-jeu-detail',
  templateUrl: './jeu-detail.component.html',
  styleUrls: ['./jeu-detail.component.css']
})
export class JeuDetailComponent implements OnInit {

  @Input() jeu: Jeu;
  constructor(
    private route: ActivatedRoute,
    private jeuService: JeuService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getJeu();
  }

  getJeu(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jeuService.getJeu(id)
        .subscribe(jeu => this.jeu = jeu);
  }

  goBack(): void {
    this.location.back();
  }

}
