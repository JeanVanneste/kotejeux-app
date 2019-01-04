import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Editeur } from './editeur';
import { EDITORS } from './editeurs-test';
import { MessageService } from '/message.service';

@Injectable({
  providedIn: 'root'
})
export class EditeurService {

  constructor(private messageService: MessageService) { }

  getEditeurs(): Observable<Editeur[]> {
    // TODO: send message _after_ fetching the editors
    this.messageService.add('EditeurService: fetched editeurs');
    return of(EDITORS);
  }
}
