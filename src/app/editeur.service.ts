import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Editeur } from './editeur';
import { EDITORS } from './editeurs-test';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EditeurService {
  private editeursUrl = 'api/editeur'; //URL to web API

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getEditeur(id: number): Observable<Editeur> {
    // TODO: send message _after_ fetching the editor
    this.messageService.add(`EditeurServicer: fetched editeur id=${id}`);
    return of(EDITORS.find(editeur => editeur.id === id));
  }

  private log(message: string) {
    this.messageService.add(`EditeurService: ${message}`);
  }

  getEditeurs(): Observable<Editeur[]> {
    // TODO: send message _after_ fetching the editors
    return this.http.get<Editeur[]>(this.editeursUrl)
  }
}
