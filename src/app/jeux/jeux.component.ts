import { Component, OnInit } from '@angular/core';

import { Jeu } from '../jeu';
import { JeuService } from '../jeu.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {

  jeux: Jeu[];

  getJeux(): void {
    this.jeuService.getJeux()
        .subscribe(jeux => this.jeux = jeux);
  }

  constructor(private jeuService: JeuService) { }

  ngOnInit() {
    this.getJeux();
  }

}
