import { Injectable } from '@angular/core';

import { Editeur } from './editeur';
import { EDITORS } from './editeurs-test'

@Injectable({
  providedIn: 'root'
})
export class EditeurService {

  constructor() { }

  getEditeurs(): Hero[] {
    return EDITORS;
  }
}
