import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBienComponent } from './display-bien.component';

describe('DisplayBienComponent', () => {
  let component: DisplayBienComponent;
  let fixture: ComponentFixture<DisplayBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
