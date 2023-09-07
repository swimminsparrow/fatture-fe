import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoFattureComponent } from './elenco-fatture.component';

describe('ElencoFattureComponent', () => {
  let component: ElencoFattureComponent;
  let fixture: ComponentFixture<ElencoFattureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElencoFattureComponent]
    });
    fixture = TestBed.createComponent(ElencoFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
