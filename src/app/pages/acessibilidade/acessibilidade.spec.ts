import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessibilidade } from './acessibilidade';

describe('Acessibilidade', () => {
  let component: Acessibilidade;
  let fixture: ComponentFixture<Acessibilidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acessibilidade],
    }).compileComponents();

    fixture = TestBed.createComponent(Acessibilidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
