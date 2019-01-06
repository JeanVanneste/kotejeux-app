import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Jeu } from './jeu';
import { JEUX } from './jeux-test';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class JeuService {

  constructor(
    private messageService: MessageService) { }

    getJeu(id: number): Observable<Jeu> {
      this.messageService.add(`JeuService: fetched jeu id=${id}`);
      return of(JEUX.find(jeu => jeu.id === id));
    }

    private log(message: string) {
      this.messageService.add(`EditeurService: ${message}`);
    }

    getJeux(): Observable<Jeu[]> {
      this.messageService.add("JeuService: fetched jeux");
      return of(JEUX);
    }
}
