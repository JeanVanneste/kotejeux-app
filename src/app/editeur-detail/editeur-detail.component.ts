import { Component, OnInit, Input } from '@angular/core';

import { Editeur } from '../editeur';

@Component({
  selector: 'app-editeur-detail',
  templateUrl: './editeur-detail.component.html',
  styleUrls: ['./editeur-detail.component.css']
})
export class EditeurDetailComponent implements OnInit {

  @Input() editeur: Editeur;
  constructor() { }

  ngOnInit() {
  }

}
