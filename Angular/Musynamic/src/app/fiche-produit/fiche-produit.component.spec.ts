import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheProduitComponent } from './fiche-produit.component';

describe('FicheProduitComponent', () => {
  let component: FicheProduitComponent;
  let fixture: ComponentFixture<FicheProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
