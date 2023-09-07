import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioFatturaComponent } from './dettaglio-fattura.component';

describe('DettaglioFatturaComponent', () => {
  let component: DettaglioFatturaComponent;
  let fixture: ComponentFixture<DettaglioFatturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglioFatturaComponent]
    });
    fixture = TestBed.createComponent(DettaglioFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
