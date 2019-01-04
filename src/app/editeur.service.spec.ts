import { TestBed } from '@angular/core/testing';

import { EditeurService } from './editeur.service';

describe('EditeurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditeurService = TestBed.get(EditeurService);
    expect(service).toBeTruthy();
  });
});
