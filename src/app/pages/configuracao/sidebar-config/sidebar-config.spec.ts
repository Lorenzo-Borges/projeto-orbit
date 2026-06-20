import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarConfig } from './sidebar-config';

describe('SidebarConfig', () => {
  let component: SidebarConfig;
  let fixture: ComponentFixture<SidebarConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarConfig],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarConfig);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
