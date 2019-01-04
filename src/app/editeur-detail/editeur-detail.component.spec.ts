import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeurDetailComponent } from './editeur-detail.component';

describe('EditeurDetailComponent', () => {
  let component: EditeurDetailComponent;
  let fixture: ComponentFixture<EditeurDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeurDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
