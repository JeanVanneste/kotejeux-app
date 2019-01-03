import { Component, OnInit } from '@angular/core';

import { Jeu } from '../jeu';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {

  jeu: Jeu = {
    id: 1,
    editeurId: 4,
    name: "Les Loups-garous de Thiercelieux",
    author: "Phillipe des Pallières et Hervé Marly",
    category: 'Ambiance',
    gameDuration: 30,
    playerMin: 6,
    playerMax: 48,
    description: "Les Loups-Garous de Thiercelieux est un jeu de société d'ambiance dans lequel chaque joueur incarne un villageois ou un loup-garou"
  }

  constructor() { }

  ngOnInit() {
  }

}
