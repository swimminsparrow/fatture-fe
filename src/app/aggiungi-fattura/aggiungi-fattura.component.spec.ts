import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiFatturaComponent } from './aggiungi-fattura.component';

describe('AggiungiFatturaComponent', () => {
  let component: AggiungiFatturaComponent;
  let fixture: ComponentFixture<AggiungiFatturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggiungiFatturaComponent]
    });
    fixture = TestBed.createComponent(AggiungiFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
