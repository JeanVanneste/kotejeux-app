import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuDetailComponent } from './jeu-detail.component';

describe('JeuDetailComponent', () => {
  let component: JeuDetailComponent;
  let fixture: ComponentFixture<JeuDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
