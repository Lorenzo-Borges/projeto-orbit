import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoTarefa } from './gerenciamento-tarefa';

describe('GerenciamentoTarefa', () => {
  let component: GerenciamentoTarefa;
  let fixture: ComponentFixture<GerenciamentoTarefa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoTarefa],
    }).compileComponents();

    fixture = TestBed.createComponent(GerenciamentoTarefa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
