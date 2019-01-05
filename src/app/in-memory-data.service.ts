import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Editeur } from './editeur';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const editeurs = [
      { id: 1, name: "Asmodée", nationalite: "France", creationYear: 1986 },
      { id: 2, name: "Hasbro", nationalite: "USA", creationYear: 1923 },
      { id: 3, name: "Games Workshop", nationalite: "Angleterre", creationYear: 1975 },
      { id: 4, name: 'Lui-même', nationalite: 'France', creationYear: 1999 },
      { id: 5, name: "Edge Entertainment" , nationalite: "France", creationYear: 1999}
    ];
    return {editeurs};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(editeurs: Editeur[]): number {
    return editeurs.length > 0 ? Math.max(...editeurs.map(editeur => editeur.id)) + 1 : 1;
  }
}
