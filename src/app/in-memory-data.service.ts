import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

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

  genId(editeurs: Editeur[]): number {
    return editeurs.length > 0 ? Math.max(...editeurs.map(editeur => editeur.id)) + 1 : 1;
  }
}
