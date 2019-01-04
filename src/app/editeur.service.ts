import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Editeur } from './editeur';
import { EDITORS } from './editeurs-test';

@Injectable({
  providedIn: 'root'
})
export class EditeurService {

  constructor() { }

  getEditeurs(): Observable<Editeur[]> {
    return of(EDITORS);
  }
}
