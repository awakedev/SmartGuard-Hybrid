import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangersPageComponent } from './dangers-page.component';

describe('DangersPageComponent', () => {
  let component: DangersPageComponent;
  let fixture: ComponentFixture<DangersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
